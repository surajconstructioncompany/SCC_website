import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { sendContactEmail } from "@/lib/send-contact-email";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Suraj Construction Company | Hisar Road Contractor" },
      {
        name: "description",
        content:
          "Email surajcons.company@gmail.com. Co-operate office at 125-126, Officers Colony, Rajgarh Road, Azad Nagar, Hisar-125001. Open Monday to Saturday, 9 AM to 7 PM.",
      },
      { property: "og:title", content: "Contact Suraj Construction Company" },
      {
        property: "og:description",
        content:
          "Reach our contracts desk for tenders, quotations and equipment hire.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  {
    icon: MapPin,
    title: "Co-operate Office",
    lines: [
      "125-126, Officers Colony, Rajgarh Road",
      "Azad Nagar, Hisar-125001",
    ],
    link: "https://www.google.com/maps/place/Suraj+Construction+Company/@29.1179956,75.6989421,19.09z/data=!4m14!1m7!3m6!1s0x3913cdc18b3e7efd:0x9feff8507dac20d!2sSuraj+Construction+Company!8m2!3d29.1178809!4d75.6995479!16s%2Fg%2F11p189qc8j!3m5!1s0x3913cdc18b3e7efd:0x9feff8507dac20d!8m2!3d29.1178809!4d75.6995479!16s%2Fg%2F11p189qc8j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["surajcons.company@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working hours",
    lines: [
      "Mon – Sat: 9:30 AM – 6:30 PM",
      "Sunday: closed (site works continue)",
    ],
  },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState<string>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = phoneValue || "";
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const result = await sendContactEmail({
        data: { name, phone, email, message },
      });

      if (result.success) {
        toast.success("Message sent", {
          description: "We'll get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description:
            result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast.error("Network error", {
        description:
          "Could not reach the server. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-background pb-16 pt-32">
        <img
          src="/contact/contact.png"
          alt="Contact background"
          className="absolute inset-0 h-full w-full object-cover object-right pointer-events-none"
        />
        {/* Gradient overlay: light beige in light mode, black in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f1eb] via-[#f4f1eb]/80 dark:from-background dark:via-background/80 to-transparent md:w-3/4 lg:w-2/3" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <StaggerContainer className="max-w-xl" staggerChildren={0.15}>
            <StaggerItem>
              <div className="mb-6 inline-flex flex-col">
                <span className="text-sm font-semibold tracking-wider text-[#c28328] dark:text-[#d39634]">
                  CONTACT
                </span>
                <div className="mt-2 h-[2px] w-12 bg-[#c28328] dark:bg-[#d39634]"></div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-5xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
                <span className="text-[#51361c] dark:text-white">TALK TO</span>
                <br />
                <span className="text-[#a57121] dark:text-[#d39634]">
                  OUR TEAM
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-md text-lg font-medium text-[#4d4d4d] dark:text-gray-300">
                For tenders, quotations, equipment hire or careers — reach the
                desk directly or send us a message.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-12 flex flex-wrap gap-10">
                <div className="flex flex-col">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full border-[1.5px] border-[#51361c] text-[#51361c] dark:border-[#d39634] dark:text-[#d39634]">
                    <MapPin className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase text-[#1a1a1a] dark:text-white">
                    Visit Us
                  </h3>
                  <p className="mt-1 text-xs font-medium leading-tight text-[#4d4d4d] dark:text-gray-400">
                    We're here to
                    <br />
                    welcome you
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full border-[1.5px] border-[#51361c] text-[#51361c] dark:border-[#d39634] dark:text-[#d39634]">
                    <Mail className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase text-[#1a1a1a] dark:text-white">
                    Write To Us
                  </h3>
                  <p className="mt-1 text-xs font-medium leading-tight text-[#4d4d4d] dark:text-gray-400">
                    Drop us a message,
                    <br />
                    we'll reply soon
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2"
          delayChildren={0.2}
          staggerChildren={0.1}
        >
          {details.map((d) => {
            const CardContent = (
              <>
                <d.icon className="size-6 text-primary" />
                <h2 className="mt-4 text-xl">{d.title}</h2>
                {d.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
                {d.link && (
                  <p className="mt-3 text-xs text-primary">
                    View on Google Maps →
                  </p>
                )}
              </>
            );

            return d.link ? (
              <StaggerItem key={d.title}>
                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card p-6 transition-colors hover:border-primary/60 cursor-pointer block"
                >
                  {CardContent}
                </a>
              </StaggerItem>
            ) : (
              <StaggerItem key={d.title}>
                <article className="surface-card p-6">{CardContent}</article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <SlideUp delay={0.4} className="surface-card space-y-5 p-7 md:p-9">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl">Send a message</h2>
            <div className="gold-rule" />
            <div className="space-y-2">
              <Label htmlFor="c-name">Name *</Label>
              <Input id="c-name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="c-email">Email *</Label>
                <Input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-phone">Phone</Label>
                <PhoneInput
                  id="c-phone"
                  international
                  defaultCountry="IN"
                  value={phoneValue || ""}
                  onChange={setPhoneValue}
                  inputComponent={Input}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 [&_input]:border-none [&_input]:bg-transparent [&_input]:p-0 [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-msg">Message *</Label>
              <Textarea
                id="c-msg"
                name="message"
                rows={5}
                required
                placeholder="How can we help?"
              />
            </div>
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </SlideUp>
      </section>
    </>
  );
}
