"use client";

import { useRef, useState, type FormEvent } from "react";

/**
 * The contact form, shown in the contact pop-up (components/ContactDialog).
 *
 * It posts to the backend's sendContactMessage function, which emails the
 * message to Transit Stats with the sender as the reply-to address. Nothing
 * is stored. The limits below are the backend's (contact-message.js), and the
 * backend checks everything again.
 *
 * Fields are filled rounded rectangles with no line around them (the hero
 * notes' 14 corners), 56 tall, the label as the placeholder; the fill is the
 * site's lightest gray (the one behind the home page's info pictures), and
 * the brand glow marks the one being typed in. The send button is the
 * site's orange pill button at the same height. A hidden field no person
 * sees traps form-filling bots: a request that fills it is dropped by the
 * backend.
 */
const ENDPOINT = "https://us-central1-transit-stats.cloudfunctions.net/sendContactMessage";
const EMAIL = "transitstatsllc@gmail.com";
const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_SHAPE = /^[^\s@<>,;:"()]+@[^\s@<>,;:"()]+\.[^\s@<>,;:"()]+$/;
const TIMEOUT_MS = 15000;

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "failed" | "too-many";

const FIELD =
  "w-full bg-[#f2f2f2] px-6 text-base font-medium text-dark outline-none transition-shadow duration-200 placeholder:font-normal placeholder:text-dark/40 focus-visible:shadow-[0_0_0_3px_rgba(247,117,44,0.2)] sm:text-lg";
const NOTE = "px-6 text-sm font-semibold leading-5 text-dark";
const LINK = "text-brand underline underline-offset-2 transition-all hover:text-brand-dark active:opacity-60";

function problems(values: Record<Field, string>): Partial<Record<Field, string>> {
  const found: Partial<Record<Field, string>> = {};
  if (!values.name.trim()) found.name = "Add your name.";
  if (!values.email.trim()) found.email = "Add your email address.";
  else if (!EMAIL_SHAPE.test(values.email.trim())) found.email = "That email address doesn't look right.";
  if (!values.message.trim()) found.message = "Write a message.";
  return found;
}

export default function ContactForm({ onSent }: { onSent?: () => void }) {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const form = useRef<HTMLFormElement>(null);

  const change = (field: Field, value: string) => {
    setValues((now) => ({ ...now, [field]: value }));
    if (errors[field]) setErrors((now) => ({ ...now, [field]: undefined }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    const found = problems(values);
    setErrors(found);
    const first = (["name", "email", "message"] as Field[]).find((field) => found[field]);
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, subject_line: trap }),
        signal: controller.signal,
      });
      if (response.ok) {
        onSent?.();
        setStatus("sent");
      } else if (response.status === 429) {
        setStatus("too-many");
      } else if (response.status === 400) {
        // The backend's own check named the fields it would not take.
        const answer = (await response.json().catch(() => null)) as { fields?: Field[] } | null;
        const named: Partial<Record<Field, string>> = {};
        for (const field of answer?.fields ?? []) {
          named[field] =
            field === "name"
              ? "Add your name."
              : field === "email"
                ? "That email address doesn't look right."
                : "Write a message.";
        }
        setErrors(named);
        setStatus(Object.keys(named).length ? "idle" : "failed");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    } finally {
      clearTimeout(timer);
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-1 flex-col justify-center gap-3.5 text-center">
        <p className="text-xl font-bold leading-[27px] text-dark xl:text-[26px] xl:leading-[35px]">
          Message sent
        </p>
        <p className="text-sm leading-6 text-dark md:text-base md:leading-7">
          Thanks for writing. We&rsquo;ll get back to you by email.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form ref={form} onSubmit={submit} noValidate className="flex flex-1 flex-col gap-4">
      {/* Name and email share a row from sm up; one under the other on
          phones. */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => change("name", e.target.value)}
            placeholder="Name"
            aria-label="Name"
            autoComplete="name"
            maxLength={LIMITS.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-note" : undefined}
            className={`h-14 rounded-[14px] ${FIELD}`}
          />
          {errors.name && (
            <p id="contact-name-note" className={NOTE}>
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => change("email", e.target.value)}
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            inputMode="email"
            autoCapitalize="none"
            spellCheck={false}
            maxLength={LIMITS.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-note" : undefined}
            className={`h-14 rounded-[14px] ${FIELD}`}
          />
          {errors.email && (
            <p id="contact-email-note" className={NOTE}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <textarea
          name="message"
          value={values.message}
          onChange={(e) => change("message", e.target.value)}
          placeholder="Message"
          aria-label="Message"
          maxLength={LIMITS.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-note" : undefined}
          className={`min-h-48 flex-1 resize-none sm:min-h-60 rounded-[14px] py-4 leading-6 sm:leading-7 ${FIELD}`}
        />
        {errors.message && (
          <p id="contact-message-note" className={NOTE}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Not for people: off screen, out of the tab order and hidden from
          screen readers. A bot that fills every field fills this one. */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Subject line (leave this empty)
          <input
            type="text"
            name="subject_line"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* The button sits 34 under the message, against the 16 between
          fields. */}
      <div className="mt-[18px] flex flex-col gap-3.5">
        <button
          type="submit"
          disabled={sending}
          className="flex h-14 cursor-pointer items-center justify-center self-start whitespace-nowrap rounded-[100px] bg-linear-to-b/srgb from-brand to-brand-dark px-7 text-base font-semibold sm:text-lg text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(247,117,44,0.4)] active:scale-[0.97] disabled:cursor-default disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {sending ? "Sending..." : "Send message"}
        </button>
        <p role="alert" className={status === "failed" || status === "too-many" ? NOTE.replace("px-6 ", "") : "sr-only"}>
          {status === "failed" && (
            <>
              That didn&rsquo;t send. Try again, or email{" "}
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>
              .
            </>
          )}
          {status === "too-many" && (
            <>
              Too many messages sent from here. Try again in an hour, or email{" "}
              <a href={`mailto:${EMAIL}`} className={LINK}>
                {EMAIL}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
