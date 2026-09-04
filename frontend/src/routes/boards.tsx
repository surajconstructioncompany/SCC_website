import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/boards")({
  head: () => ({
    meta: [
      { title: "Our Partners & Key Management | Suraj Construction Company" },
      {
        name: "description",
        content:
          "Meet Our Partners and Key Management of Suraj Construction Company — the experienced leadership team steering India's road and infrastructure growth.",
      },
      {
        property: "og:title",
        content: "Our Partners & Key Management | Suraj Construction Company",
      },
      {
        property: "og:description",
        content:
          "Meet the visionary leaders behind Suraj Construction Company.",
      },
    ],
  }),
  component: OurPartners,
});

/* ------------------------------------------------------------------ */
/*  Shared person type                                                */
/* ------------------------------------------------------------------ */

interface Person {
  id: string;
  name: string;
  designation: string;
  /** ─────────────────────────────────────────────────────────────────
   *  🖼️  WHERE TO ADD IMAGES:
   *  Replace each placeholder URL below with the real photo path.
   *  You can either:
   *    1. Import a local image:
   *         import phoolwatiImg from "@/assets/directors/phoolwati.jpg";
   *       then set  image: phoolwatiImg
   *
   *    2. Use a public URL:
   *         image: "https://your-cdn.com/photos/phoolwati.jpg"
   *
   *    3. Place files in  public/directors/  and reference as:
   *         image: "/directors/phoolwati.jpg"
   *  ────────────────────────────────────────────────────────────────── */
  image: string;
  bio: string;
  experience?: string;
  expertise?: string[];
}

/* ------------------------------------------------------------------ */
/*  SEGMENT 1 — Our Partners                                          */
/* ------------------------------------------------------------------ */

const ourPartners: Person[] = [
  {
    id: "satish-kumar",
    name: "Sh. Satish Kumar Ji",
    designation: "Executive Partner",
    image: "/directors/satish.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/phoolwati.jpg"
    bio: "Sh. Satish Kumar is an Executive Partner at Suraj Construction Company, contributing actively to the firm's management, business operations, and strategic decision-making. He plays an important role in coordinating the firm's activities and supporting its commitment to quality, reliable execution, and long-term growth in the construction sector.",
  },
  {
    id: "suraj-kumar",
    name: "Sh. Suraj Ji",
    designation: "Executive Partner",
    image: "/directors/suraj.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/rakesh-kumar.jpg"
    bio: "Sh. Suraj Kumar is an Executive Partner at Suraj Construction Company, actively involved in the firm's day-to-day operations, business planning, and key decision-making. He contributes to efficient project execution, operational coordination, and the development of strong relationships with clients and stakeholders.",
  },
  {
    id: "mukesh",
    name: "Smt. Mukesh",
    designation: "Non-Executive Partner",
    image: "/directors/female.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/ravinder-kumar.jpg"
    bio: "Smt. Mukesh is a Non-Executive Partner at Suraj Construction Company, contributing to the firm's long-term strategic direction and major partnership decisions. Her role provides an important perspective on the firm's growth and development while supporting sound decision-making and the company's commitment to building a strong and sustainable business.",
  },
  {
    id: "murti-devi",
    name: "Smt. Murti Devi",
    designation: "Non-Executive Partner",
    image: "/directors/female.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/bant-singh-singla.jpg"
    bio: "Smt. Murti Devi is a Non-Executive Partner at Suraj Construction Company, offering guidance on long-term business strategy and supporting the firm's stability. Her involvement helps ensure that decisions align with the company’s values and contribute to its sustained growth and market reputation.",
  },
  {
    id: "sumitra-devi",
    name: "Smt. Sumitra Devi",
    designation: "Non-Executive Partner",
    image: "/directors/female.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/bant-singh-singla.jpg"
    bio: "Smt. Sumitra Devi is a Non-Executive Partner at Suraj Construction Company, contributing to the firm's broader vision and long-term business objectives. Her role focuses on supporting key partnership decisions and encouraging sustainable development, while helping preserve the firm's values, stability, and commitment to its future growth.",
  },
];

/* ------------------------------------------------------------------ */
/*  SEGMENT 2 — Key Management                                       */
/* ------------------------------------------------------------------ */

const keyManagement: Person[] = [
  {
    id: "shankar",
    name: "Mr. Shankar Gada",
    designation: "Group CFO",
    image: "/directors/shankar.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/gauri-gupta.jpg"
    bio: "Mr. Shankar Gada heads financial planning, budgeting and treasury operations for the group. He ensures fiscal discipline across all ongoing projects while managing banking relationships and project-finance structuring.",
    experience: "18+ years in finance & accounting",
    expertise: ["Financial Planning", "Treasury Management", "Project Finance"],
  },
  {
    id: "vivek",
    name: "Mr. Vivek Sharma",
    designation: "Head of Human Resources",
    image: "/directors/vivek.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/yogesh-mahajan.jpg"
    bio: "Mr. Vivek Sharma is an experienced HR professional with over 15 years of industry experience, bringing strong expertise in human resource management, employee relations, talent management and organizational development. As HR Head, he focuses on building effective teams, strengthening workplace practices and supporting the company's people and organizational goals.",
    experience: "15+ Years of Human Resources & People Management Experience",
    expertise: ["Human Resource Management", "Talent Acquisition & Recruitment", "Performance Management"],
  },
  {
    id: "amit",
    name: "Mr. Amit",
    designation: "Accounts Executive (CA)",
    image: "/directors/amit.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/sumant-gupta.jpg"
    bio: "Mr. Amit is an accomplished Chartered Accountant with extensive experience in corporate finance, audit, and compliance. He plays a pivotal role in overseeing the financial health and integrity of the organization, ensuring robust accounting practices and regulatory adherence across all business verticals.",
    experience: "16+ years in accounting",
    expertise: ["Financial Reporting", "Audit & Assurance", "Tax Compliance"],
  },
  {
    id: "hardik",
    name: "Mr. Hardik Gupta",
    designation: "CA – Accounts & Taxation",
    image: "/directors/hardik.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/brigadier-mahajan.jpg"
    bio: "Mr. Hardik Gupta is a Chartered Accountant with professional experience across financial reporting, audit, taxation, GST compliance and accounting operations. His experience includes working with international clients, handling GST and tax compliance, reviewing financial records, supporting audits, preparing financial documentation and assisting businesses with accounting and regulatory requirements.",
    expertise: [
      "Financial Reporting & Analysis",
      "GST & Tax Compliance",
      "Income Tax & Returns",
      "Financial Documentation"
    ],
  },
  {
    id: "umesh",
    name: "Mr. Umesh kumar",
    designation: "Finance Manager",
    image: "/directors/umesh.png",
    //  ⬆️ Replace with real photo — e.g. "/directors/brigadier-mahajan.jpg"
    bio: "Mr. Umesh is a dedicated accounts professional with extensive experience in financial operations, reconciliation, and compliance. He is responsible for maintaining accurate financial records, supporting audit processes, and ensuring adherence to accounting standards across the organization.",
    experience: "16+ years in accounting",
    expertise: [
      "Financial Operations",
      "Reconciliation",
      "Accounting Standards",
    ],
  },
  {
    id: "ajay",
    name: "Mr. Ajay",
    designation: "Tender & Contracts Manager",
    image: "/directors/ajay.jpg",
    //  ⬆️ Replace with real photo — e.g. "/directors/sandeep-verma.jpg"
    bio: "Mr. Ajay is a Civil Engineering professional with extensive experience across major highway and road infrastructure projects. His expertise spans quantity surveying, tender estimation, BOQ analysis, project scheduling, billing, contract documentation, resource planning and project coordination. He has worked across major NHAI-led highway projects in Haryana, Punjab and Gujarat, supporting large-scale EPC and HAM developments.",
    experience: "11+ years of experience in highway infrastructure, quantity surveying, tender estimation and project commercial management.",
    expertise: ["Tender & Contract Management", "Quantity Surveying & Estimation", "BOQ & Rate Analysis", "Project Scheduling & Progress Monitoring"],
  },
  {
    id: "dinesh",
    name: "Mr. Dinesh Verma",
    designation: "Project Manager",
    image: "/directors/dinesh.jpg",
    bio: "Mr. Dinesh Verma is an experienced Project Manager with over 15 years of expertise in planning, coordinating, and executing construction projects. He plays a key role in ensuring projects are delivered safely, efficiently, and within established timelines and budgets, while maintaining high standards of quality and client satisfaction.",
    experience: "15+ years in project management",
    expertise: [
      "Project Planning",
      "Construction Management",
      "Team Coordination",
      "Quality & Safety",
      "Cost & Schedule Control"
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Detail Modal                                                      */
/* ------------------------------------------------------------------ */

function PersonModal({
  person,
  onClose,
}: {
  person: Person;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="director-modal relative flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        {/* portrait image — full height on desktop, banner on mobile */}
        <div className="director-modal-image h-56 w-full shrink-0 md:h-auto md:w-[320px]">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* text column */}
        <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
          <h2 className="text-4xl text-gold-gradient">{person.name}</h2>
          <p className="mt-2 text-sm font-semibold tracking-wide text-primary">
            {person.designation}
          </p>
          {person.experience && (
            <p className="mt-1 text-xs text-muted-foreground">
              {person.experience}
            </p>
          )}

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {person.bio}
          </p>

          {person.expertise && person.expertise.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Areas of Expertise
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {person.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Person Card                                                       */
/* ------------------------------------------------------------------ */

function PersonCard({
  person,
  onClick,
  index,
}: {
  person: Person;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="director-card group flex flex-col items-center text-center outline-none"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`View details for ${person.name}`}
    >
      {/* circular image with ring */}
      <div className="relative">
        <div className="director-ring size-44 overflow-hidden rounded-full border-[3px] border-border/70 shadow-md transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_28px_-6px_var(--gold)]">
          <img
            src={person.image}
            alt={person.name}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        {/* hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-primary/0 transition-all duration-500 group-hover:bg-primary/15">
          <span className="translate-y-3 text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </div>
      </div>

      {/* name + designation */}
      <h3 className="mt-5 text-xl transition-colors group-hover:text-gold-gradient">
        {person.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{person.designation}</p>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page — two segments                                               */
/* ------------------------------------------------------------------ */

function OurPartners() {
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fce29f]/40 via-background to-[#b88225]/20 dark:from-[#b88225]/30 dark:via-background dark:to-[#fce29f]/10 overflow-hidden">
      {/* Soft ambient primary/gold glows */}
      <div className="absolute top-0 right-0 -mr-[20vw] -mt-[10vw] h-[50vw] w-[50vw] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-[20vw] -mb-[10vw] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* ──── Our Partners ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6">
          <div className="text-left mb-20">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide text-gold-gradient uppercase drop-shadow-sm">
              Our Partners
            </h1>
            <div className="gold-rule mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {ourPartners.map((d, i) => (
              <PersonCard
                key={d.id}
                person={d}
                index={i}
                onClick={() => setActivePerson(d)}
              />
            ))}
          </div>
        </section>

        {/* ──── Key Management ──────────────────────────────────────── */}
        <section className="border-t border-border/40 bg-card/20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <div className="text-center md:text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gold-gradient tracking-wide uppercase drop-shadow-sm">
                Key Management
              </h2>
              <div className="gold-rule mt-6 mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
              {keyManagement.map((d, i) => (
                <PersonCard
                  key={d.id}
                  person={d}
                  index={i + ourPartners.length}
                  onClick={() => setActivePerson(d)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ──── Detail Modal ───────────────────────────────────────── */}
      {activePerson && (
        <PersonModal
          person={activePerson}
          onClose={() => setActivePerson(null)}
        />
      )}
    </div>
  );
}
