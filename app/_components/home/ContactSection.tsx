import { IconMapPin, IconPhone } from "@tabler/icons-react";
import { formCopy } from "@/app/_content/home";
import { ContactForm } from "@/app/_components/contact/contact-form";
import { contact } from "@/lib/contact";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="dark-section border-b border-kolss-warm-white/14"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.42fr_0.58fr] lg:px-10 lg:py-20">
        <div>
          <p className="section-kicker text-background/70">Контакти</p>
          <h2 id="contact-title" className="section-title text-background">
            {formCopy.title}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.6] text-background/80">
            {formCopy.description}
          </p>
          <div className="mt-8 grid gap-4 text-background/88">
            <a href={contact.phoneHref} className="flex items-center gap-3 font-semibold">
              <IconPhone size={18} className="text-kolss-lime" />
              {contact.phone}
            </a>
            <p className="flex items-start gap-3">
              <IconMapPin size={18} className="mt-0.5 text-kolss-lime" />
              <span>
                {contact.streetAddress}
                <br />
                {contact.city}, {contact.postalCode}
              </span>
            </p>
          </div>
        </div>
        <ContactForm
          id="lead-form"
          title="Залиште заявку"
          description="Ми зв'яжемося в робочий час і підкажемо наступний крок."
          defaultLeadType={formCopy.defaultLeadType}
        />
      </div>
    </section>
  );
}
