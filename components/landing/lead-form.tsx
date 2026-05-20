"use client";

import {
  IconCheck,
  IconClipboardText,
  IconFileUpload,
  IconMapPin,
  IconMessageCircle,
  IconMessages,
  IconPhoneCall,
  IconSend,
  IconUser,
} from "@tabler/icons-react";
import { FormEvent, useState } from "react";

type LeadFormProps = {
  title: string;
  description: string;
  defaultLeadType: string;
  submitLabel: string;
};

const utmKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function LeadForm({
  title,
  description,
  defaultLeadType,
  submitLabel,
}: LeadFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    utmKeys.forEach((key) => {
      const input = form.elements.namedItem(key);
      if (input instanceof HTMLInputElement) {
        input.value = params.get(key) ?? "";
      }
    });

    const pageUrl = form.elements.namedItem("page_url");
    if (pageUrl instanceof HTMLInputElement) {
      pageUrl.value = window.location.href;
    }

    setSent(true);
    form.reset();
  }

  return (
    <section className="lead-section" id="lead-form" aria-labelledby="lead-title">
      <div className="lead-section__copy">
        <p className="section-kicker">Заявка</p>
        <h2 id="lead-title">{title}</h2>
        <p>{description}</p>
        <div className="lead-section__hint">
          <span>
            <IconClipboardText aria-hidden size={17} stroke={1.8} />
            Є проєкт - замовити прорахунок
          </span>
          <span>
            <IconMessages aria-hidden size={17} stroke={1.8} />
            Немає проєкту - отримати консультацію
          </span>
        </div>
      </div>

      <form className="lead-form" onSubmit={handleSubmit}>
        <input name="utm_source" type="hidden" />
        <input name="utm_medium" type="hidden" />
        <input name="utm_campaign" type="hidden" />
        <input name="utm_content" type="hidden" />
        <input name="utm_term" type="hidden" />
        <input name="page_url" type="hidden" />

        <label>
          <span>
            <IconUser aria-hidden size={16} stroke={1.9} />
            Ім&apos;я
          </span>
          <input name="name" required placeholder="Як до вас звертатися" />
        </label>

        <label>
          <span>
            <IconPhoneCall aria-hidden size={16} stroke={1.9} />
            Телефон
          </span>
          <input
            name="phone"
            required
            inputMode="tel"
            placeholder="+380"
            type="tel"
          />
        </label>

        <label>
          <span>
            <IconClipboardText aria-hidden size={16} stroke={1.9} />
            Тип запиту
          </span>
          <select name="lead_type" defaultValue={defaultLeadType} required>
            <option>Кухня</option>
            <option>Меблі</option>
            <option>Комплексне меблювання</option>
            <option>Салон</option>
            <option>Інше</option>
          </select>
        </label>

        <label>
          <span>
            <IconCheck aria-hidden size={16} stroke={1.9} />
            Чи є проєкт
          </span>
          <select name="has_project" defaultValue="Є проєкт" required>
            <option>Є проєкт</option>
            <option>Немає проєкту</option>
          </select>
        </label>

        <label>
          <span>
            <IconMapPin aria-hidden size={16} stroke={1.9} />
            Місто або район монтажу
          </span>
          <input name="location" placeholder="Київ, Буча, Ірпінь..." />
        </label>

        <label>
          <span>
            <IconFileUpload aria-hidden size={16} stroke={1.9} />
            Прикріпити файл
          </span>
          <input
            name="file"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.doc,.docx"
          />
        </label>

        <label className="lead-form__wide">
          <span>
            <IconMessageCircle aria-hidden size={16} stroke={1.9} />
            Коментар
          </span>
          <textarea
            name="message"
            placeholder="Опишіть приміщення, матеріали або бажаний наступний крок"
            rows={4}
          />
        </label>

        <button type="submit">
          <IconSend aria-hidden size={19} stroke={1.9} />
          {submitLabel}
        </button>
        <p className="lead-form__microcopy">
          Форма працює як mock у першій версії. Дані не відправляються на сервер.
        </p>
        {sent ? (
          <p className="lead-form__success" role="status">
            <IconCheck aria-hidden size={18} stroke={2} />
            Заявку надіслано. Ми зв&apos;яжемося з вами в робочий час.
          </p>
        ) : null}
      </form>
    </section>
  );
}
