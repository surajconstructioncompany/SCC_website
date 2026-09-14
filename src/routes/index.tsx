import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  ShieldCheck,
  MapPin,
  Route as RouteIcon,
  MoveHorizontal,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suraj Construction Company | Road & Infrastructure Builders" },
      {
        name: "description",
        content:
          "Suraj Construction Company builds highways, rural roads, bridges and urban infrastructure across India. Book a contract or request a tender quote today.",
      },
      {
        property: "og:title",
        content: "Suraj Construction Company | Road & Infrastructure Builders",
      },
      {
        property: "og:description",
        content:
          "Suraj Construction Company builds highways, rural roads, bridges and urban infrastructure across India. Book a contract or request a tender quote today.",
      },
    ],
  }),
  component: Home,
});

const FlyoverIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    {/* Bridge deck */}
    <rect x="1" y="10.5" width="22" height="2.5" />

    {/* Top road left */}
    <polygon points="9,9.5 11,9.5 11,2 9.5,2" />
    {/* Top road right */}
    <polygon points="13,9.5 15,9.5 14.5,2 13,2" />

    {/* Bottom road left */}
    <polygon points="6,14 11,14 11,23 3,23" />
    {/* Bottom road right */}
    <polygon points="13,14 18,14 21,23 13,23" />

    {/* Left Pillar */}
    <polygon points="2,14 4.5,14 3.5,18 2,18" />
    {/* Right Pillar */}
    <polygon points="19.5,14 22,14 22,18 20.5,18" />
  </svg>
);

const services = [
  {
    icon: RouteIcon,
    title: "Highways & Expressways",
    text: "Suraj Construction Company undertakes road construction, widening, strengthening and rehabilitation for major highway corridors, supporting the development and improvement of essential transport infrastructure.",
  },
  {
    icon: MoveHorizontal,
    title: "Road Widening & Strengthening",
    text: "Upgrading existing carriageways through widening, pavement strengthening and improvement works to improve existing road infrastructure.",
  },
  {
    icon: FlyoverIcon,
    title: "Bridges, Flyovers & Culverts",
    text: "Construction and improvement of flyovers, bridges, box culverts and associated structures as part of wider infrastructure and connectivity projects.",
  },
  {
    icon: Wrench,
    title: "Road Maintenance & O&M",
    text: "Operation, maintenance and performance-based upkeep of highway and road infrastructure, supporting the continued performance of completed road assets.",
  },
];

const totalRevenue = projects.reduce((acc, project) => {
  const match = project.cost.match(/[\d.]+/);
  return acc + (match ? parseFloat(match[0]) : 0);
}, 0);

const totalProjects = projects.length;
const yearsExperience = new Date().getFullYear() - 2004;

const uniqueStates = new Set(
  projects.map((p) => {
    const loc = p.location.toLowerCase();
    if (loc.includes("haryana")) return "Haryana";
    if (loc.includes("madhya pradesh")) return "Madhya Pradesh";
    if (loc.includes("rajasthan")) return "Rajasthan";
    if (loc.includes("uttar pradesh")) return "Uttar Pradesh";
    if (loc.includes("punjab")) return "Punjab";
    if (loc.includes("delhi")) return "Delhi";
    const parts = p.location.split(",");
    return parts[parts.length - 1]?.trim() || "";
  }),
);
const statesCovered = uniqueStates.size;

const extractClients = () => {
  const clientMap = new Map<string, string>();
  projects.forEach((p) => {
    const auth = p.details?.governmentAuthority || p.client || "";
    const str = auth.toUpperCase();
    if (str.includes("NHAI") || str.includes("NATIONAL HIGHWAYS"))
      clientMap.set("NHAI", "/Client_logo/NHAI.png");
    else if (str.includes("FMDA") || str.includes("FARIDABAD METROPOLITAN"))
      clientMap.set("FMDA", "/Client_logo/fmda.png");
    else if (str.includes("HSRDC"))
      clientMap.set("HSRDC", "/Client_logo/hsrdc.png");
    else if (str.includes("PWD") || str.includes("PUBLIC WORKS")) {
      if (
        str.includes("HARYANA") ||
        p.location.toUpperCase().includes("HARYANA")
      )
        clientMap.set("Haryana PWD", "/Client_logo/pwd_haryana.png");
      else if (
        str.includes("MADHYA PRADESH") ||
        p.location.toUpperCase().includes("MADHYA PRADESH")
      )
        clientMap.set("MP PWD", "/Client_logo/pwd_mp.jpg");
      else clientMap.set("PWD", "");
    } else {
      clientMap.set(auth.split(",")[0] || "", "");
    }
  });
  return Array.from(clientMap.entries()).map(([name, logo]) => ({
    name,
    logo,
  }));
};
const uniqueClients = extractClients();

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.surajconstructioncompany.in/#organization",
      "name": "Suraj Construction Company",
      "url": "https://www.surajconstructioncompany.in/",
      "telephone": "+91 7404283720",
      "email": "surajcons.company@gmail.com",
      "foundingDate": "2004",
      "description": "Suraj Construction Company is a civil infrastructure and road construction company established in 2004, delivering road, highway, bridge and infrastructure projects.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125-126, Officers Colony, Rajgarh Road, Azad Nagar",
        "addressLocality": "Hisar",
        "addressRegion": "Haryana",
        "postalCode": "125001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "18:30"
      },
      "sameAs": [
        "https://www.linkedin.com/in/surajconstructioncompany"
      ],
      "knowsAbout": [
        "Road Construction",
        "Highway Construction",
        "Road Widening",
        "Road Strengthening",
        "Bridge Construction",
        "Flyover Construction",
        "Culvert Construction",
        "Road Maintenance",
        "Infrastructure Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.surajconstructioncompany.in/#website",
      "url": "https://www.surajconstructioncompany.in/",
      "name": "Suraj Construction Company",
      "publisher": {
        "@id": "https://www.surajconstructioncompany.in/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.surajconstructioncompany.in/#webpage",
      "url": "https://www.surajconstructioncompany.in/",
      "name": "Suraj Construction Company",
      "isPartOf": {
        "@id": "https://www.surajconstructioncompany.in/#website"
      },
      "about": {
        "@id": "https://www.surajconstructioncompany.in/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.surajconstructioncompany.in/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.surajconstructioncompany.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.surajconstructioncompany.in/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.surajconstructioncompany.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What road construction and infrastructure services does Suraj Construction Company provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Suraj Construction Company provides road construction and infrastructure services including highways and expressways, road widening and strengthening, bridges, flyovers and culverts, and road maintenance and O&M."
          }
        },
        {
          "@type": "Question",
          "name": "What types of highway, road and infrastructure projects does Suraj Construction Company undertake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The company undertakes highway and road construction, widening, strengthening and rehabilitation works, along with bridges, flyovers, culverts and related infrastructure projects."
          }
        },
        {
          "@type": "Question",
          "name": "Does Suraj Construction Company undertake government and PWD infrastructure projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Suraj Construction Company has experience delivering infrastructure projects for government authorities and is a Class-I registered contractor with Haryana PWD (B&R) and other state departments."
          }
        },
        {
          "@type": "Question",
          "name": "Does Suraj Construction Company undertake infrastructure projects across India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Suraj Construction Company has covered 4+ states through its project work. Contact the company to discuss the location, scope and requirements of a proposed infrastructure project."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications, registrations and project experience does Suraj Construction Company have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The company is an ISO 9001:2015 certified organisation and a Class-I registered contractor with Haryana PWD (B&R) and other state departments, with 22 years of experience and 14+ projects delivered."
          }
        },
        {
          "@type": "Question",
          "name": "How can I discuss a road construction or infrastructure project with Suraj Construction Company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Suraj Construction Company through its Contact page to discuss your road construction, highway, bridge or infrastructure project requirements and project scope."
          }
        }
      ]
    }
  ]
};

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <section className="relative isolate overflow-hidden">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/40"
          aria-hidden
        />
        <SlideUp
          yOffset={30}
          className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-40"
        >
          <p className="text-[10px] md:text-xs tracking-widest md:tracking-[0.32em] text-primary">
            ROAD CONSTRUCTION · INFRASTRUCTURE · DEVELOPMENT
          </p>
          <h1 className="mt-4 md:mt-6 max-w-4xl text-5xl font-extrabold normal-case tracking-tight leading-[1.05] sm:text-6xl md:text-[5.5rem]">
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
              We build the roads
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-gold-gradient">that move India.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-light leading-snug text-foreground/90 md:text-2xl">
            Suraj Construction Company delivers <Link to="/projects" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">road construction and infrastructure development</Link> for highways, rural roads, bridges and urban infrastructure. With experience since 2004, we focus on building and improving the routes through which progress travels.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/about">
                Know Us <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </SlideUp>
      </section>

      <section className="border-y border-border/70 bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
              Our Track Record
            </p>
            <h2 className="mt-4 text-4xl normal-case leading-[0.95] md:text-5xl font-light">
              Built. Delivered.{" "}
              <span className="text-primary font-medium">Proven.</span>
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
              Suraj Construction Company has delivered <strong>450+ KM of road and highway works</strong>, with <Link to="/projects" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">14+ projects delivered</Link>, <Link to="/about" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">22 years of experience</Link>, work across <strong>4+ states</strong> and <strong>730+ Cr in company's total revenue</strong>. These figures reflect the company's established experience in road and infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[240px]">
            {/* Large Card (Image Background, Left-most, Spans 2x2) */}
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-sm md:col-span-2 md:row-span-2 min-h-[350px]">
              <img
                src="/Home/results_light.webp"
                alt="Road & Highway Works"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105 dark:hidden"
              />
              <img
                src="/Home/results_dark.webp"
                alt="Road & Highway Works"
                loading="lazy"
                decoding="async"
                className="hidden absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105 dark:block"
              />
              {/* Backgroundless text over image */}
              <div className="absolute bottom-10 left-10 right-6 md:right-auto">
                <p className="text-sm font-bold uppercase tracking-wider text-white drop-shadow-sm">
                  Road & Highway Works
                </p>
                <p className="mt-1 text-5xl font-black tracking-tight text-white drop-shadow-md md:text-6xl">
                  450+ <span className="text-2xl font-bold">KM</span>
                </p>
              </div>
            </div>

            {/* Small Card 1 (Square, Top Right) */}
            <div className="surface-card flex flex-col justify-between rounded-3xl p-8 shadow-sm transition-all hover:shadow-md md:col-span-1 md:row-span-1">
              <div className="flex items-center justify-start">
                <img
                  src="/Home/project_icon.png"
                  alt="Project Icon"
                  loading="lazy"
                  decoding="async"
                  className="size-20 object-contain dark:invert"
                />
              </div>
              <div>
                <p className="mt-2 text-5xl font-bold text-foreground">
                  {totalProjects}+
                </p>
                <p className="text-base font-medium text-muted-foreground">
                  Projects delivered
                </p>
              </div>
            </div>

            {/* Small Card 2 (Square, Middle Right) */}
            <div className="surface-card flex flex-col justify-between rounded-3xl p-8 shadow-sm transition-all hover:shadow-md md:col-span-1 md:row-span-1">
              <div className="flex items-center justify-start">
                <img
                  src="/Home/exp_icon.png"
                  alt="Experience Icon"
                  loading="lazy"
                  decoding="async"
                  className="size-20 scale-[1.3] -translate-x-2 object-contain dark:invert"
                />
              </div>
              <div>
                <p className="mt-2 text-5xl font-bold text-foreground">
                  {yearsExperience}
                </p>
                <p className="text-base font-medium text-muted-foreground">
                  Years experience
                </p>
              </div>
            </div>

            {/* Small Card 3 (Square, Bottom Left) */}
            <div className="group relative overflow-hidden flex flex-col rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm transition-all hover:shadow-md md:col-span-1 md:row-span-1">
              {/* Animated Path */}
              <svg
                className="absolute inset-0 size-full opacity-40 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 20 25 C 60 25, 40 75, 80 75"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="8 8"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
              </svg>

              {/* Icon 1 (Top Left) */}
              <div className="absolute left-[20%] top-[25%] z-10 -translate-x-1/2 -translate-y-[85%] text-white">
                <MapPin className="size-10 fill-white/20" />
              </div>

              {/* Icon 2 (Bottom Right) */}
              <div className="absolute left-[80%] top-[75%] z-10 -translate-x-1/2 -translate-y-[85%] text-white">
                <MapPin className="size-10 fill-white/20" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-auto">
                <p className="text-5xl font-bold text-white">
                  {statesCovered}+
                </p>
                <p className="text-base font-medium text-primary-foreground/80">
                  States Covered
                </p>
              </div>
            </div>

            {/* Wide Card 4 (Horizontal, Bottom Right) */}
            <div className="surface-card flex flex-col justify-center rounded-3xl p-8 shadow-sm transition-all hover:shadow-md md:col-span-2 md:row-span-1">
              <div>
                <p className="text-lg font-medium text-muted-foreground">
                  Company's Total Revenue
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <img
                    src="/Home/rupee_icon.png"
                    alt="Rupee Icon"
                    loading="lazy"
                    decoding="async"
                    className="h-[58px] w-auto object-contain dark:invert"
                  />
                  <p className="text-5xl font-bold text-foreground sm:text-6xl">
                    {Math.floor(totalRevenue)}+ Cr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SlideUp yOffset={20}>
          <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
            WHAT WE DO
          </p>
          <h2 className="mt-4 text-4xl normal-case leading-[0.95] md:text-5xl font-light">
            Engineering roads.{" "}
            <span className="text-primary font-medium">
              Building connectivity.
            </span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Our services cover key areas of road and highway construction, infrastructure improvement and ongoing road asset maintenance.
          </p>
        </SlideUp>

        <StaggerContainer
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          delayChildren={0.2}
          staggerChildren={0.1}
        >
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="surface-card flex flex-col justify-start rounded-3xl p-6 border border-border/50 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-md">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="size-6 text-primary" />
                </div>
                <h3
                  className="mb-3 text-[15px] font-semibold tracking-tight text-foreground normal-case leading-snug"
                  title={s.title}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="w-full pb-20">
        <FadeIn delay={0.2}>
          <img
            src="/Home/mumbai_bridge_light.webp"
            alt="Mumbai Bridge"
            loading="lazy"
            decoding="async"
            className="w-full h-[400px] md:h-[600px] object-cover dark:hidden"
          />
          <img
            src="/Home/mumbai_bridge_dark.webp"
            alt="Mumbai Bridge"
            loading="lazy"
            decoding="async"
            className="hidden w-full h-[400px] md:h-[600px] object-cover dark:block"
          />
        </FadeIn>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
          <SlideUp yOffset={20}>
            <p className="text-xs tracking-[0.3em] text-primary">OUR CLIENTS</p>
            <h2 className="mt-4 text-4xl normal-case leading-[0.95] md:text-5xl font-light mb-6">
              Trusted by government authorities
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
              Suraj Construction Company has experience delivering <Link to="/projects" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">government infrastructure projects</Link> for government authorities, including work associated with <strong>NHAI, FMDA, MP PWD, HSRDC and Haryana PWD</strong>. This experience reflects the company's established capability in executing public infrastructure and road projects.
            </p>
            <div className="gold-rule mt-6" />
          </SlideUp>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-x-auto overflow-y-hidden py-4 group [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] items-center gap-16 px-8">
            {/* Triple the array for seamless scrolling */}
            {[...uniqueClients, ...uniqueClients, ...uniqueClients].map(
              (client, i) => (
                <div
                  key={i}
                  className="flex size-64 shrink-0 items-center justify-center rounded-3xl bg-zinc-100 dark:bg-zinc-800/80 border border-border/50 shadow-sm p-10 transition-all hover:scale-105 hover:border-primary/50"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-contain mix-blend-multiply dark:mix-blend-normal dark:contrast-125 dark:brightness-110 pointer-events-none"
                    />
                  ) : (
                    <p className="text-xl font-bold tracking-wider text-foreground text-center">
                      {client.name}
                    </p>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333% - 16px)); }
          }
        `}</style>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Side - Text */}
          <SlideUp
            yOffset={20}
            className="flex flex-col justify-start lg:pt-8 lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
              WHY SCC
            </p>
            <h2 className="mt-4 text-4xl normal-case leading-[0.95] md:text-5xl font-light">
              Certified, equipped, <br className="hidden lg:block" />
              <span className="text-primary font-medium">
                built to deliver.
              </span>
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Suraj Construction Company is a <strong>Class-I registered contractor with Haryana PWD (B&R)</strong> and other state departments, backed by an owned fleet of modern construction equipment and in-house resources to execute projects efficiently, reliably and on schedule.
            </p>
          </SlideUp>

          {/* Right Side - Features Stack */}
          <div className="flex flex-col gap-5 lg:col-span-6">
            {[
              {
                icon: BadgeCheck,
                title: "ISO 9001:2015",
                text: "Certified quality management system.",
              },
              {
                icon: ShieldCheck,
                title: "Government Project Experience",
                text: "Experience delivering infrastructure projects for government authorities.",
              },
              {
                icon: ClipboardCheck,
                title: "Timely Delivery & Expertise",
                text: "Technical expertise delivering major infrastructure projects on schedule.",
              },
            ].map((item, idx) => (
              <SlideUp
                key={item.title}
                delay={0.1 * (idx + 1)}
                yOffset={20}
                className="group flex items-center gap-6 overflow-hidden rounded-3xl bg-zinc-100 p-5 shadow-sm transition-all hover:-translate-x-1 hover:shadow-md hover:ring-1 hover:ring-primary/50 dark:bg-zinc-800/50"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  <item.icon className="size-7 text-primary" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <h3
                    className="text-base sm:text-lg font-bold uppercase leading-snug"
                    title={item.title}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground mt-1"
                    title={item.text}
                  >
                    {item.text}
                  </p>
                </div>
              </SlideUp>
            ))}

            {/* CTA Card */}
            <SlideUp
              delay={0.4}
              yOffset={20}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:flex-row sm:items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 max-w-sm">
                <h3 className="text-2xl font-bold">Want to join our team?</h3>
                <p className="mt-2 text-primary-foreground/80">
                  Explore <Link to="/careers" className="font-bold underline hover:text-white">career opportunities</Link> and learn more about opportunities with a fast-growing, innovative <strong>construction company</strong>.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="relative z-10 mt-6 shrink-0 transition-transform group-hover:scale-105 sm:mt-0"
              >
                <Link to="/careers">
                  View Careers <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </SlideUp>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SlideUp yOffset={20}>
          <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
            EXPERIENCE
          </p>
          <h2 className="mt-4 text-4xl normal-case leading-[0.95] md:text-5xl font-light">
            Certification, capability <br className="hidden md:block"/>
            <span className="text-primary font-medium">and project experience.</span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Suraj Construction Company's <Link to="/about" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">ISO 9001:2015 certification</Link>, Class-I contractor registration and experience delivering government infrastructure projects demonstrate the company's established delivery capabilities. Its owned fleet of modern construction equipment and in-house resources support the execution of road and highway projects across the company's areas of work. Visitors can explore the <Link to="/projects" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">Projects</Link> and <Link to="/boards" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">Our Partners</Link> pages to understand the company's work, background and project relationships.
          </p>
        </SlideUp>
      </section>

      <section className="border-y border-border/70 bg-muted/20 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SlideUp yOffset={20} className="text-center mb-12">
            <h2 className="text-3xl normal-case leading-[0.95] md:text-4xl font-light">
              Frequently Asked <span className="text-primary font-medium">Questions</span>
            </h2>
            <div className="gold-rule mt-6 mx-auto" />
          </SlideUp>

          <SlideUp delay={0.2} yOffset={20}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">What road construction and infrastructure services does Suraj Construction Company provide?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  Suraj Construction Company provides road construction and infrastructure services including highways and expressways, road widening and strengthening, bridges, flyovers and culverts, and road maintenance and O&M.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">What types of highway, road and infrastructure projects does Suraj Construction Company undertake?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  The company undertakes highway and road construction, widening, strengthening and rehabilitation works, along with bridges, flyovers, culverts and related infrastructure projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Does Suraj Construction Company undertake government and PWD infrastructure projects?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  Yes. Suraj Construction Company has experience delivering infrastructure projects for government authorities and is a Class-I registered contractor with Haryana PWD (B&R) and other state departments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">Does Suraj Construction Company undertake infrastructure projects across India?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  Suraj Construction Company has covered 4+ states through its project work. <Link to="/contact" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">Contact the company</Link> to discuss the location, scope and requirements of a proposed infrastructure project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold">What certifications, registrations and project experience does Suraj Construction Company have?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  The company is an ISO 9001:2015 certified organisation and a Class-I registered contractor with Haryana PWD (B&R) and other state departments, with 22 years of experience and 14+ projects delivered.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-semibold">How can I discuss a road construction or infrastructure project with Suraj Construction Company?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  You can contact Suraj Construction Company through its <Link to="/contact" className="text-primary hover:no-underline hover:text-yellow-400 dark:hover:text-yellow-200 transition-colors font-medium">Contact page</Link> to discuss your road construction, highway, bridge or infrastructure project requirements and project scope.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SlideUp>
        </div>
      </section>
    </>
  );
}
