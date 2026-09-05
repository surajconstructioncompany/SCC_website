import { createFileRoute } from "@tanstack/react-router";
import { Loader2, ArrowUpRight, ArrowRight, Check, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { sendCareerEmail } from "@/lib/send-career-email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitStatus('submitting');
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const dob = formData.get("dob") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const position = formData.get("position") as string;
    const currentSalary = formData.get("currentSalary") as string;
    const expectedSalary = formData.get("expectedSalary") as string;
    const address = formData.get("address") as string;
    
    const files = formData.getAll("documents") as File[];
    const validFiles = files.filter((f) => f.size > 0);

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
          dob,
          jobTitle,
          position,
          currentSalary,
          expectedSalary,
          address,
          attachments,
        },
      });

      if (result.success) {
        setSubmitStatus('success');
        toast.success("Application submitted!", {
          description:
            "Thank you for applying. Our HR team will review your application and get back to you.",
        });
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        toast.error("Failed to send application", {
          description:
            result.error || "Something went wrong. Please try again.",
        });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch {
      setSubmitStatus('error');
      toast.error("Network error", {
        description:
          "Could not reach the server. Please check your connection and try again.",
      });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-black py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12 text-foreground">
          Career <span className="text-[#df9b31]">Form</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative rounded-[2rem] overflow-hidden h-[600px] lg:h-full min-h-[500px]">
            <img
              src="/career/career.png"
              alt="Career Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional overlay if needed to match styling */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold text-sm">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name *"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-semibold text-sm">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-sm">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="font-semibold text-sm">Date Of Birth *</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6 text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="font-semibold text-sm">Job Title *</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  required
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position" className="font-semibold text-sm">Position Applying For *</Label>
                <Input
                  id="position"
                  name="position"
                  required
                  placeholder="Applying For"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentSalary" className="font-semibold text-sm">Current Salary *</Label>
                <Input
                  id="currentSalary"
                  name="currentSalary"
                  required
                  placeholder="Current Salary"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedSalary" className="font-semibold text-sm">Expected Salary *</Label>
                <Input
                  id="expectedSalary"
                  name="expectedSalary"
                  required
                  placeholder="Expected Salary"
                  className="bg-white text-black border-none shadow-sm rounded-xl py-6"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address" className="font-semibold text-sm">Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  required
                  rows={4}
                  placeholder="Your Message.."
                  className="bg-white text-black border-none shadow-sm rounded-xl resize-none"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="documents" className="font-semibold text-sm block">Upload Your Resume</Label>
              <div className="flex items-center">
                <input
                  id="documents"
                  name="documents"
                  type="file"
                  required
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`group rounded-full shadow-sm flex items-center gap-3 h-auto transition-all duration-300 ${
                  submitStatus === 'success' 
                    ? 'bg-green-500 text-white hover:bg-green-600 border-transparent py-4 px-6' 
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white hover:bg-red-600 border-transparent py-4 px-6'
                    : 'bg-white text-black hover:bg-[#df9b31] hover:text-white border border-gray-200 hover:border-[#df9b31] py-4 pl-6 pr-2 hover:pr-6 hover:pl-6'
                }`}
              >
                <span className="font-semibold text-sm">
                  {submitStatus === 'submitting' ? "Sending..." 
                   : submitStatus === 'success' ? "Sent Successfully" 
                   : submitStatus === 'error' ? "Failed to Send" 
                   : "Send Message"}
                </span>
                
                {submitStatus === 'submitting' ? (
                  <div className="bg-[#df9b31] rounded-full p-2.5 text-white flex items-center justify-center">
                    <Loader2 className="size-4 animate-spin" />
                  </div>
                ) : submitStatus === 'success' ? (
                  <Check className="size-5" />
                ) : submitStatus === 'error' ? (
                  <X className="size-5" />
                ) : (
                  <div className="relative flex items-center justify-center size-9">
                    {/* Default state: Golden circle with ArrowUpRight */}
                    <div className="absolute inset-0 bg-[#df9b31] rounded-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                      <ArrowUpRight className="size-4 text-white stroke-[3]" />
                    </div>
                    {/* Hover state: Just ArrowRight */}
                    <ArrowRight className="absolute size-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

