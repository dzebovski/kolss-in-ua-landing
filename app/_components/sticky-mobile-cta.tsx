"use client";

import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";
import { contact } from "@/lib/contact";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-kolss-warm-white/96 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={contact.phoneHref}
          className="kolss-button kolss-button-secondary flex-1"
        >
          <IconPhone size={18} aria-hidden />
          Дзвінок
        </a>
        <Link href="#kontakt" className="kolss-button kolss-button-primary flex-[1.2]">
          Прорахунок
        </Link>
      </div>
    </div>
  );
}
