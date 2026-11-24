/**
 * Opens the contact pop-up from anywhere on the site. The pop-up itself
 * (components/ContactDialog) is mounted once in the root layout and listens
 * here; the buttons that open it (components/ContactButton) call openContact.
 */
type Listener = () => void;

const listeners = new Set<Listener>();

export function openContact() {
  for (const listener of listeners) listener();
}

export function onOpenContact(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
