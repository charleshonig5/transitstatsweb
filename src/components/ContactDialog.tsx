"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";
import { onOpenContact } from "@/lib/contact-dialog";

/**
 * The contact pop-up: the site's contact form in a white card over a dimmed
 * page. It is mounted once in the root layout and opens from the hero's
 * "Contact us" button, the footer's "Contact" link, and any address ending
 * in ?contact (where the old /contact page now sends people).
 *
 * The card is the site's white card (the leaderboard's 44 corners and
 * padding, 720 wide) under the site's deeper shadow. The close button is the
 * FAQ cards' tinted circle with its plus turned into a cross. It closes with
 * that button, the Escape key, or a click on the dimmed page.
 *
 * Motion: the card rises 12 and grows from 96% as the page dims, 300 ms on
 * the site's curve; closing is the same in reverse in 200 ms. A native
 * <dialog> keeps the keyboard inside the card and hands focus back to the
 * button that opened it.
 */
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";
const CLOSE_MS = 200;

export default function ContactDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const closing = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressedOutside = useRef(false);
  const [shown, setShown] = useState(false);
  // Once a message is sent the card keeps the form's height, so the thank-you
  // doesn't make it jump; the next opening starts with an empty form.
  const [sentHeight, setSentHeight] = useState<number | null>(null);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const open = () => {
      const el = dialog.current;
      if (!el) return;
      clearTimeout(closing.current);
      if (!el.open) {
        el.showModal();
        /* Lock page scroll on <html>, as the mobile menu does. */
        document.documentElement.style.overflow = "hidden";
        // Read once, so the browser has the closed look to start from.
        void el.offsetWidth;
      }
      setShown(true);
      // With a mouse the first field is ready to type in. On a touch screen
      // it is left alone, so the keyboard doesn't cover the card on arrival.
      if (window.matchMedia("(hover: hover)").matches) {
        el.querySelector<HTMLElement>('[name="name"]')?.focus();
      }
    };

    const stop = onOpenContact(open);

    // An address ending in ?contact opens the pop-up on arrival, then drops
    // the ending so a refresh doesn't open it again.
    let frame = 0;
    if (new URLSearchParams(window.location.search).has("contact")) {
      frame = requestAnimationFrame(() => {
        window.history.replaceState(null, "", window.location.pathname + window.location.hash);
        open();
      });
    }

    return () => {
      cancelAnimationFrame(frame);
      stop();
    };
  }, []);

  const close = () => {
    const el = dialog.current;
    if (!el?.open) return;
    setShown(false);
    clearTimeout(closing.current);
    const wait = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : CLOSE_MS;
    closing.current = setTimeout(() => el.close(), wait);
  };

  /* The dialog has closed, by the timer above or by the browser itself. */
  const closed = () => {
    clearTimeout(closing.current);
    document.documentElement.style.overflow = "";
    setShown(false);
    if (sentHeight !== null) {
      setSentHeight(null);
      setFormKey((key) => key + 1);
    }
  };

  return (
    <dialog
      ref={dialog}
      aria-labelledby="contact-dialog-title"
      onCancel={(e) => {
        // Escape: close with the motion instead of at once.
        e.preventDefault();
        close();
      }}
      onClose={closed}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none overflow-hidden border-0 bg-transparent p-0 text-dark backdrop:bg-transparent"
    >
      {/* The dimmed page, frosted like the header and the mobile menu. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-dark/40 backdrop-blur-md transition-opacity motion-reduce:transition-none ${
          shown ? "duration-300" : "opacity-0 duration-200"
        }`}
      />

      {/* Scrolls when the card is taller than the screen. */}
      <div className="absolute inset-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* A click on the dimmed page closes; one that only ends there (a
            drag out of a field) doesn't. */}
        <div
          className="flex min-h-full items-center justify-center p-5 md:p-10"
          onPointerDown={(e) => {
            pressedOutside.current = e.target === e.currentTarget;
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget && pressedOutside.current) close();
          }}
        >
          <div
            className={`flex w-full max-w-[720px] flex-col gap-6 rounded-[44px] bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-[opacity,scale,translate] sm:p-8 md:gap-8 md:p-10 ${EASE} ${
              shown ? "duration-300" : "translate-y-3 scale-[0.96] opacity-0 duration-200"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 id="contact-dialog-title" className="text-3xl font-bold leading-[1.2] text-brand sm:text-4xl">
                Contact us
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-200 hover:scale-105 active:scale-90"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="rotate-45">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div
              ref={body}
              className="flex flex-col"
              style={sentHeight === null ? undefined : { minHeight: sentHeight }}
            >
              <ContactForm
                key={formKey}
                onSent={() => setSentHeight(body.current?.offsetHeight ?? null)}
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
