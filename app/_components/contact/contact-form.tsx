"use client";

import { IconUpload } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/contact";
import { projectTypes } from "@/app/_content/home";

type FormMode = "project" | "consult";

type ContactFormProps = {
  title: string;
  description: string;
  defaultLeadType?: string;
  id?: string;
};

const locations = [
  "Київ",
  "Київська область",
  "Ірпінь",
  "Буча",
  "Бровари",
  "Вишневе",
  "Інше",
] as const;

export function ContactForm({
  title,
  description,
  defaultLeadType = "Комплексне меблювання",
  id = "lead-form",
}: ContactFormProps) {
  const [mode, setMode] = useState<FormMode>("project");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [leadType, setLeadType] = useState(defaultLeadType);
  const [location, setLocation] = useState("Київ");
  const [message, setMessage] = useState("");
  const [fileLabel, setFileLabel] = useState("План, фото або рендер");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      utm_term: params.get("utm_term") ?? "",
      page_url: window.location.href,
    };
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(undefined);

    if (!name.trim()) {
      setError("Вкажіть, як до вас звертатися.");
      return;
    }
    if (!phone.trim()) {
      setError("Вкажіть номер телефону, щоб ми могли зв'язатися з вами.");
      return;
    }

    setState("submitting");
    window.setTimeout(() => {
      setState("success");
      setName("");
      setPhone("");
      setMessage("");
      if (fileRef.current) fileRef.current.value = "";
      setFileLabel("План, фото або рендер");
    }, 700);
  };

  if (state === "success") {
    return (
      <div
        id={id}
        className="rounded-lg border border-background/18 bg-background p-6 text-foreground shadow-[0_20px_52px_rgba(30,36,33,0.18)] sm:p-8"
      >
        <p className="text-lg font-semibold">Заявку надіслано</p>
        <p className="mt-3 text-[15px] leading-[1.6] text-muted">
          Дякуємо. Ми отримали заявку й зв&apos;яжемося з вами в робочий час. Якщо
          у вас є додаткові фото або план, підготуйте їх до розмови.
        </p>
        <a href={contact.phoneHref} className="kolss-button kolss-button-primary mt-6">
          Зателефонувати {contact.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="kolss-form grid gap-5 rounded-lg border border-background/18 bg-background p-5 text-foreground shadow-[0_20px_52px_rgba(30,36,33,0.18)] sm:p-6"
      noValidate
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-[15px] leading-[1.55] text-muted">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "project"
              ? "bg-kolss-lime text-kolss-charcoal"
              : "border border-border bg-kolss-surface-alt"
          }`}
          onClick={() => setMode("project")}
        >
          Є проєкт
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            mode === "consult"
              ? "bg-kolss-lime text-kolss-charcoal"
              : "border border-border bg-kolss-surface-alt"
          }`}
          onClick={() => setMode("consult")}
        >
          Немає проєкту
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Ім&apos;я
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="name"
            className="min-h-12 px-3 font-normal"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Телефон
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            autoComplete="tel"
            className="min-h-12 px-3 font-normal"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Тип меблів
          <select
            value={leadType}
            onChange={(e) => setLeadType(e.target.value)}
            className="min-h-12 px-3 font-normal"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Місто / район
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="min-h-12 px-3 font-normal"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        Коментар
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="px-3 py-3 font-normal"
          placeholder={
            mode === "project"
              ? "Опишіть задачу або додайте посилання на файли"
              : "Розкажіть, які меблі потрібні і на якому етапі ремонт"
          }
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Файл
        <span className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border px-3 text-sm font-normal text-muted">
          <IconUpload size={18} aria-hidden />
          <input
            ref={fileRef}
            type="file"
            className="sr-only"
            accept="image/*,.pdf,.dwg"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileLabel(file?.name ?? "План, фото або рендер");
            }}
          />
          {fileLabel}
        </span>
      </label>

      {error ? (
        <p className="text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="kolss-button kolss-button-primary w-full sm:w-auto"
      >
        {state === "submitting"
          ? "Надсилаємо заявку..."
          : mode === "project"
            ? "Замовити прорахунок"
            : "Отримати консультацію"}
      </button>

      <p className="text-xs leading-[1.5] text-muted">
        Або зателефонуйте{" "}
        <a href={contact.phoneHref} className="font-semibold text-foreground underline">
          {contact.phone}
        </a>
      </p>
    </form>
  );
}
