import { Link, createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/data/projects";
import { SlideUp } from "@/components/ui/motion";

type ProjectSearch = {
  status?: string;
};

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>): ProjectSearch => {
    const status = search["status"] as string | undefined;
    return (status ? { status } : {}) as ProjectSearch;
  },
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | Suraj Construction Company" },
      {
        name: "description",
        content:
          "Selected highway, rural road, bridge and urban infrastructure projects delivered by Suraj Construction Company across four states.",
      },
      {
        property: "og:title",
        content: "Projects & Portfolio | Suraj Construction Company",
      },
      {
        property: "og:description",
        content:
          "Highway widening, PMGSY roads, bridges and city infrastructure delivered on schedule.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const { status } = Route.useSearch();

  const filteredProjects = status
    ? projects.filter((p) => p.status.toLowerCase() === status.toLowerCase())
    : projects;

  const pageTitle = status
    ? `${status.charAt(0).toUpperCase() + status.slice(1)} Projects`
    : "Work we have delivered";

  return (
    <>
      <SlideUp yOffset={-20}>
        <PageHeader
          eyebrow="PROJECTS"
          title={pageTitle}
          description={<AnimatedProjectStats />}
          videoSrc="/Projects.mp4"
        />
      </SlideUp>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="block"
            >
              <article className="relative overflow-hidden group cursor-pointer min-h-[300px] md:min-h-[360px] shadow-lg hover:shadow-2xl hover:-translate-y-1 h-full rounded-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                {/* Background image */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                  <img
                    src={p.image || "/dark_logo.png"}
                    alt={p.name}
                    className="size-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
                  />
                </div>

                {/* Status badge — always visible */}
                <div className="absolute top-5 right-5 z-30">
                  <span
                    className={`shadow-md border-none px-3 py-1 uppercase tracking-wider text-[10px] font-bold rounded-md ${p.status === "Completed" ? "bg-emerald-600 text-white" : "bg-primary text-primary-foreground"}`}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Sliding blue overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 z-20 h-full translate-y-[62%] group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-[rgba(20,35,75,0.60)] backdrop-blur-[1.5px]"
                >
                  {/* Name in visible strip (default state) */}
                  <div className="absolute top-0 left-0 right-0 px-7 pt-5 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:-translate-y-3">
                    <h2
                      className="text-xl md:text-2xl lg:text-[1.65rem] font-extrabold tracking-wide leading-tight normal-case"
                      style={{ color: "#26efe9" }}
                    >
                      {p.name}
                    </h2>
                  </div>

                  {/* Full content — staggered reveal on hover */}
                  <div className="absolute inset-0 flex flex-col justify-center px-7 pt-4 pb-7">
                    {/* Location — slides in from left */}
                    <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] mb-3 text-white opacity-0 -translate-x-4 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0 delay-[200ms]">
                      {p.location}
                    </p>

                    {/* Underline — scales in from left */}
                    <div
                      className="h-[2px] w-10 rounded-full mb-6 origin-left scale-x-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 delay-[300ms]"
                      style={{ backgroundColor: "#26efe9", opacity: 0.6 }}
                    />

                    {/* Project name — fades up, lightens on direct hover */}
                    <h2
                      className="text-2xl md:text-3xl lg:text-[2rem] font-extrabold tracking-wide leading-tight normal-case mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-[350ms] text-[#26efe9] hover:text-[#c9fbfa] cursor-pointer"
                      style={{ transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1), color 100ms ease" }}
                    >
                      {p.name}
                    </h2>

                    {/* Client — fades up with longer delay */}
                    <p className="text-sm md:text-base text-white font-normal leading-relaxed opacity-0 translate-y-4 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 delay-[450ms]">
                      {p.client}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

const slides = [
  {
    prefix: "Our documented portfolio spans ",
    highlight: "450+ km",
    suffix: " of road and highway sections.",
    label: "Road & highway sections",
  },
  {
    prefix: "Our portfolio includes ",
    highlight: "NHAI projects",
    suffix: " across completed and ongoing works.",
    label: "NHAI project experience",
  },
  { prefix: "Our infrastructure work spans ", highlight: "4+ states" },
  {
    prefix: "We currently maintain ",
    highlight: "144.66 km",
    suffix: " of highway under an ongoing O&M contract.",
    label: "Highway under O&M",
  },
  {
    prefix: "Our documented flyover works include a ",
    highlight: "119.15 m",
    suffix: " viaduct in Panchkula.",
    label: "Documented flyover / viaduct length",
  },
];

function AnimatedProjectStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (isHovered) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 600);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsVisible(true);
    }, 300);
  };

  const slide = slides[currentIndex];

  return (
    <div
      className="relative flex items-center min-h-[4rem] sm:min-h-[3rem]"
      aria-live="polite"
    >
      <span
        className={`inline-block text-lg md:text-xl transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {slide?.prefix}
        <span
          className="relative inline-block cursor-pointer group text-primary font-bold transition-colors hover:text-primary/80 mx-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNext}
          title={slide?.label}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleNext();
          }}
        >
          {slide?.highlight}
          <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary/40 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
        </span>
        {slide?.suffix}
      </span>
    </div>
  );
}
