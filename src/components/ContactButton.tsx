"use client";

import type { ReactNode } from "react";
import { openContact } from "@/lib/contact-dialog";

/** A button that opens the contact pop-up. It looks like whatever it is
    given: the hero's outlined pill, the footer's plain link. */
export default function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" aria-haspopup="dialog" onClick={openContact} className={className}>
      {children}
    </button>
  );
}
