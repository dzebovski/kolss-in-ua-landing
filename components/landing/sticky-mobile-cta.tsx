import { IconPhoneCall, IconSend } from "@tabler/icons-react";
import { contact } from "@/lib/kolss-content";

export function StickyMobileCta() {
  return (
    <div className="mobile-cta" aria-label="Швидкі дії">
      <a href={contact.phoneHref}>
        <IconPhoneCall aria-hidden size={19} stroke={1.9} />
        Подзвонити
      </a>
      <a href="#lead-form">
        <IconSend aria-hidden size={19} stroke={1.9} />
        Заявка
      </a>
    </div>
  );
}
