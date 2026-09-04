import { createFileRoute } from "@tanstack/react-router";
import { Mail, Briefcase, GraduationCap, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { sendCareerEmail } from "@/lib/send-career-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/site/PageHeader";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Career Opportunities | Suraj Construction Company" },
      {
        name: "description",
        content:
          "Join Suraj Construction Company and build the infrastructure of tomorrow. Apply for current openings and start your career with us.",
      },
    ],
  }),
  component: Careers,
});

const roles = [
  "Civil Engineer",
  "Project Manager",
  "Site Supervisor",
  "Equipment Operator",
  "Safety Officer",
  "Administrative Staff",
  "Other",
];

const experiences = [
  "Fresher",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

/** Convert a File to a base64 string (without the data-url prefix) */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip "data:...;base64," prefix
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function Careers() {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!role) {
      toast.error("Please select a role.");
      return;
    }

    setSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;
    const otherRole = formData.get("otherRole") as string;
    const files = formData.getAll("documents") as File[];
    const validFiles = files.filter((f) => f.size > 0);
    const finalRole = role === "Other" && otherRole ? otherRole : role;

    try {
      // Convert files to base64 for the server function
      const attachments = await Promise.all(
        validFiles.map(async (file) => ({
          filename: file.name,
          content: await fileToBase64(file),
        })),
      );

      const result = await sendCareerEmail({
        data: {
          name,
          phone,
          email,
          role: finalRole,
          experience,
          details,
          attachments,
        },
      });

      if (result.success) {
        toast.success("Application submitted!", {
          description:
            "Thank you for applying. Our HR team will review your application and get back to you.",
        });
        form.reset();
        setRole("");
        setExperience("");
      } else {
        toast.error("Failed to send application", {
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
      <SlideUp
        yOffset={-20}
        className="relative overflow-hidden border-b border-border/70"
      >
        <img
          src="/career/career.png"
          alt="Careers background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-background/90 dark:via-background/50 dark:to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#df9b31]">
            Careers
          </p>
          <div className="mt-3 mb-5 w-16 border-t-2 border-[#df9b31]" />
          <h1 className="text-4xl font-semibold uppercase leading-[1.1] md:text-[3.5rem] text-foreground">
            Build your <span className="text-[#df9b31]">future</span>
            <br />
            with us
          </h1>
          <div className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            <p>
              Join a team dedicated to constructing world-class infrastructure.
            </p>
            <p className="mt-1">
              We are always looking for passionate professionals to drive our
              projects forward.
            </p>
          </div>
        </div>
      </SlideUp>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>
          <StaggerItem>
            <form
              onSubmit={handleSubmit}
              className="surface-card space-y-6 p-7 md:p-9"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Role Applied For *</Label>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {role === "Other" && (
                    <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Input
                        name="otherRole"
                        placeholder="Please specify the role..."
                        required
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Experience</Label>
                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select years" />
                    </SelectTrigger>
                    <SelectContent>
                      {experiences.map((e) => (
                        <SelectItem key={e} value={e}>
                          {e}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Cover Letter / Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Tell us about your background, skills, and why you want to join us..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="documents">Resume</Label>
                <Input
                  id="documents"
                  name="documents"
                  type="file"
                  multiple
                  className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/20"
                />
                <p className="text-xs text-muted-foreground">
                  Resume, license, experience certificates, etc.
                </p>
              </div>

              <Button type="submit" size="lg" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </StaggerItem>
        </StaggerContainer>

        <aside className="space-y-6">
          <SlideUp delay={0.4}>
            <div className="surface-card p-7">
              <h2 className="text-2xl">Why Join Us?</h2>
              <div className="gold-rule mt-4" />
              <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Briefcase className="mt-0.5 size-5 shrink-0 text-primary" />
                  Work on impactful, large-scale infrastructure projects across
                  multiple states.
                </li>
                <li className="flex gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                  Continuous learning and career advancement opportunities.
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  Direct communication with management and a supportive work
                  environment.
                </li>
              </ul>
            </div>
          </SlideUp>
        </aside>
      </section>
    </>
  );
}
