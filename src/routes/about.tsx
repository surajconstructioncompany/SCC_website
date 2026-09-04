import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Building2,
  Trophy,
  Users2,
  Target,
  ChevronUp,
  ChevronDown,
  MapPin,
  ShieldCheck,
  HardHat,
  Users,
} from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { SlideUp } from "@/components/ui/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Suraj Construction Company | 20 Years of Road Building" },
      {
        name: "description",
        content:
          "A Class-A registered road construction contractor with an owned equipment fleet, in-house QC lab and 320+ delivered infrastructure projects.",
      },
      { property: "og:title", content: "About Suraj Construction Company" },
      {
        property: "og:description",
        content:
          "Class-A road contractor with owned fleet, QC lab and 320+ delivered projects.",
      },
    ],
  }),
  component: About,
});

const milestones = [
  {
    year: "2004",
    title: "THE BEGINNING",
    text: "A small beginning with a clear direction building our first roads and laying the foundation for everything that followed.",
  },
  {
    year: "2011",
    title: "BUILDING MOMENTUM",
    text: "The groundwork was paying off. We grew our capabilities, took on more work and began building a stronger presence in the industry.",
  },
  {
    year: "2016",
    title: "EXPANDING CAPABILITIES",
    text: "New challenges brought new capabilities from broader expertise to the resources needed to take on increasingly demanding works.",
  },
  {
    year: "2021",
    title: "RAISING THE STANDARD",
    text: "With experience behind us, we stepped into a bigger league taking on greater responsibilities with sharper execution and stronger systems.",
  },
  {
    year: "2024",
    title: "A STRONGER PRESENCE",
    text: "Experience became our advantage. A growing portfolio, stronger resources and refined execution positioned us for the next chapter.",
  },
  {
    year: "2026",
    title: "ENGINEERED FOR WHAT'S NEXT",
    text: "The journey continues carrying forward what we have learned while building the capability to take on what comes next.",
  },
];

const stats = [
  { icon: Building2, value: "320+", label: "Projects Delivered" },
  { icon: Trophy, value: "20", label: "Years Experience" },
  { icon: Users2, value: "400+", label: "Skilled Personnel" },
  { icon: Target, value: "98%", label: "On-time Delivery" },
];

const taglines = [
  "Behind every mile",
  "Built on the ground",
  "That builds what lasts",
  "That moves India",
];

function About() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SlideUp yOffset={-20}>
        <section className="relative w-full min-h-[600px] flex items-center bg-cover bg-center bg-[url('/about/about_light.png')] dark:bg-[url('/about/about_dark.png')] border-b border-border">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="w-full md:w-[60%] lg:w-[50%] py-20 flex flex-col justify-center">
              <p className="text-primary tracking-widest text-sm uppercase mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-display leading-tight mb-4">
                <span className="bg-gradient-to-b from-[#fce29f] to-[#b88225] bg-clip-text text-transparent block">
                  THE EXPERIENCE
                </span>
                <span
                  key={taglineIndex}
                  className="text-foreground block animate-in fade-in slide-in-from-bottom-2 duration-700 normal-case font-sans tracking-normal"
                >
                  {taglines[taglineIndex]}
                </span>
              </h1>
              <div className="w-16 h-1 bg-primary mb-12" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
                {/* SVG Defs for Icon Gradient */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop stopColor="#fce29f" offset="0%" />
                      <stop stopColor="#b88225" offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <ShieldCheck
                    className="size-10 mb-3 stroke-[1.5]"
                    stroke="url(#goldGradient)"
                  />
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-widest mb-1">
                    Trust
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Built on integrity and transparency
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:border-l border-border/50 sm:pl-6">
                  <HardHat
                    className="size-10 mb-3 stroke-[1.5]"
                    stroke="url(#goldGradient)"
                  />
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-widest mb-1">
                    Experience
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    22+ years of on-ground expertise
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:border-l border-border/50 sm:pl-6">
                  <Users
                    className="size-10 mb-3 stroke-[1.5]"
                    stroke="url(#goldGradient)"
                  />
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-widest mb-1">
                    Commitment
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Dedicated to building a stronger India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-wide">
            Who we are
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Established in 2004, Suraj Construction Company (SCC) has grown from
            a district-level road contractor into an experienced civil
            infrastructure company delivering road, highway and allied
            infrastructure projects. Our expertise spans highway widening,
            National Highways, RCC bridges, industrial pavements and other civil
            works.
          </p>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            With experienced engineering teams, skilled site professionals and
            an owned fleet of construction equipment, we maintain strong control
            over project execution and quality. Every project is approached with
            disciplined planning, technical expertise and a commitment to
            building infrastructure that is durable, dependable and built to
            serve for years to come.
          </p>
          <p className="mt-6 text-lg md:text-xl font-bold text-muted-foreground leading-relaxed">
            We build the infrastructure that connects communities and moves
            progress forward.
          </p>
        </div>
      </section>

      {/* Mid Image Break with Overlay Box */}
      <section className="relative w-full">
        <img
          src="/about/mid_light.png"
          alt="Company operations"
          className="w-full h-auto object-cover min-h-[500px] block dark:hidden"
        />
        <img
          src="/about/mid_dark.png"
          alt="Company operations"
          className="w-full h-auto object-cover min-h-[500px] hidden dark:block"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-end mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="p-10 md:p-12 w-full max-w-lg lg:max-w-xl shadow-2xl rounded-3xl backdrop-blur-md bg-white/80 dark:bg-black/60 border border-white/30 dark:border-white/10">
            <h2 className="text-3xl md:text-4xl text-foreground font-light uppercase tracking-wide">
              Registrations
            </h2>
            <div className="gold-rule mt-5" />
            <div className="mt-10 flex flex-col gap-8">
              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-[0.05em]">
                  Class-A Civil Contractor
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mt-1.5">
                  State PWD registered contractor
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-[0.05em]">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mt-1.5">
                  Quality-focused management systems
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-[0.05em]">
                  Statutory Compliance
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mt-1.5">
                  GST, PAN, EPF &amp; ESIC registered
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-[0.05em]">
                  Authority Empanelment
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mt-1.5">
                  Associated with relevant government and local development
                  authorities
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground uppercase tracking-[0.05em]">
                  Insured Operations
                </h3>
                <p className="text-sm md:text-base text-foreground/70 mt-1.5">
                  Project and workforce coverage maintained as applicable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/50 bg-gradient-to-b from-zinc-50 to-background dark:from-black dark:to-black py-24 overflow-hidden">
        {/* Soft corner lighting */}
        <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 -ml-32 -mb-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-4xl font-light text-foreground tracking-tight">
            Milestones
          </h2>
          <div className="gold-rule mt-4" />
          <div className="mt-16 w-full lg:max-w-6xl">
            <InteractiveMilestones />
          </div>
        </div>
      </section>
    </>
  );
}

function InteractiveMilestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    setActiveIndex(index);
    const itemHeight = 140;
    containerRef.current.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });
  };

  const lockScroll = () => {
    isScrollingRef.current = true;
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600); // Lock scrolling for 600ms to enforce 1-by-1 swipe
  };

  useEffect(() => {
    // Attach event listeners to the entire section, not just the inner timeline
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const currentIdx = activeIndexRef.current;
      const isAtTopBoundary = currentIdx === 0 && e.deltaY < 0;
      const isAtBottomBoundary =
        currentIdx === milestones.length - 1 && e.deltaY > 0;

      if (isAtTopBoundary || isAtBottomBoundary) {
        return; // Let the page scroll natively when at boundaries
      }

      e.preventDefault(); // Prevent page scroll when inside the timeline

      if (isScrollingRef.current) return;
      if (Math.abs(e.deltaY) < 15) return; // Ignore tiny trackpad noise

      if (e.deltaY > 0) {
        scrollTo(currentIdx + 1);
        lockScroll();
      } else if (e.deltaY < 0) {
        scrollTo(currentIdx - 1);
        lockScroll();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0]?.clientY ?? 0;
      const deltaY = touchStartY.current - touchY;
      const currentIdx = activeIndexRef.current;

      const isAtTopBoundary = currentIdx === 0 && deltaY < 0;
      const isAtBottomBoundary =
        currentIdx === milestones.length - 1 && deltaY > 0;

      if (isAtTopBoundary || isAtBottomBoundary) {
        return; // Let the page scroll natively when at boundaries
      }

      e.preventDefault(); // Prevent page scroll when inside the timeline

      if (isScrollingRef.current) return;

      if (Math.abs(deltaY) > 30) {
        // Require a meaningful swipe distance
        if (deltaY > 0) {
          scrollTo(currentIdx + 1);
          lockScroll();
        } else if (deltaY < 0) {
          scrollTo(currentIdx - 1);
          lockScroll();
        }
      }
    };

    // Use passive: false to allow e.preventDefault()
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [milestones.length]);

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 w-full"
      ref={sectionRef}
    >
      {/* Left side: Scrolling Timeline */}
      <div className="relative h-[280px] w-full md:w-1/2 mt-4 md:mt-0">
        <div className="relative h-full w-full overflow-hidden">
          {/* Straight Road SVG */}
          <svg className="absolute left-0 top-0 w-[32px] h-full pointer-events-none z-0">
            {/* Road surface */}
            <rect
              x="4"
              y="0"
              width="24"
              height="100%"
              className="fill-zinc-800 dark:fill-zinc-200"
            />
            {/* Road borders */}
            <line
              x1="4"
              y1="0"
              x2="4"
              y2="100%"
              className="stroke-zinc-900 dark:stroke-zinc-300"
              strokeWidth="1.5"
            />
            <line
              x1="28"
              y1="0"
              x2="28"
              y2="100%"
              className="stroke-zinc-900 dark:stroke-zinc-300"
              strokeWidth="1.5"
            />
            {/* Center dashed moving line */}
            <line
              x1="16"
              y1="0"
              x2="16"
              y2="100%"
              className="stroke-white dark:stroke-zinc-900 animate-dash-move"
              strokeWidth="2.5"
              strokeDasharray="4 8"
            />
          </svg>
          <style>{`
          @keyframes dash-move {
            from { stroke-dashoffset: 32; }
            to { stroke-dashoffset: 0; }
          }
          .animate-dash-move {
            animation: dash-move 1.5s linear infinite;
          }
        `}</style>

          {/* Scroll Container - overflow-hidden so native scroll is disabled, fully custom JS scrolled */}
          <div ref={containerRef} className="h-full w-full overflow-hidden">
            <div className="relative">
              {milestones.map((m, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={m.year}
                    className="relative z-10 h-[140px] snap-start flex flex-col justify-center pl-16 cursor-pointer group pr-4"
                    onClick={() => scrollTo(index)}
                  >
                    {/* Custom Location bullet point */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center size-8">
                      {isActive ? (
                        <div className="relative flex items-center justify-center">
                          <span className="absolute size-12 animate-ping rounded-full bg-red-500/30 duration-1000" />
                          <span className="absolute size-8 animate-pulse rounded-full bg-red-500/50" />
                          <div className="relative flex items-center justify-center size-8 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                            <MapPin className="size-7 fill-red-500 stroke-white stroke-[1.5]" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center size-8 transition-colors duration-300">
                          <MapPin className="size-5 fill-background stroke-muted-foreground stroke-2 group-hover:stroke-primary/70 group-hover:scale-110 transition-transform" />
                        </div>
                      )}
                    </div>

                    {/* Year Heading */}
                    <p
                      className={`font-display transition-all duration-500 ease-out origin-left ${isActive ? "text-primary text-5xl font-bold" : "text-muted-foreground text-3xl font-medium"}`}
                    >
                      {m.year}
                    </p>
                  </div>
                );
              })}

              {/* Spacer to allow the last item to snap to the top */}
              <div className="relative z-10 h-[280px] snap-start" />
            </div>
          </div>

          {/* Gradient fades to mask scrolling edges */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background dark:from-black to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right side: Details Text Box */}
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
        <div className="relative p-8 md:p-10 rounded-2xl bg-white dark:bg-black shadow-xl shadow-black/5 border border-border overflow-hidden min-h-[180px] flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
          <div
            key={activeIndex}
            className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {milestones[activeIndex]?.title}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {milestones[activeIndex]?.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
