import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.project.seoTitle },
      { name: "description", content: loaderData?.project.seoDescription },
    ],
  }),
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const { project } = Route.useLoaderData();

  const detailsList = [
    { label: "Project Type", value: project.type },
    { label: "Project Category", value: project.category },
    { label: "Client", value: project.client },
    { label: "Project Location", value: project.location },
    { label: "Contract Value", value: project.cost },
    { label: "Date of Commencement", value: project.details.commencementDate },
    { label: "Date of Completion", value: project.details.completionDate },
    {
      label: "Company Equity Shareholding",
      value: project.details.equityShare,
    },
    { label: "Financial Information", value: project.details.financialInfo },
    { label: "Execution Information", value: project.details.executionMode },
    { label: "Project Scope", value: project.scope },
    { label: "Authority", value: project.details.governmentAuthority },
    { label: "Project Status", value: project.status },
  ].filter((item) => Boolean(item.value));

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      {/* Cover Image */}
      <div className="relative h-64 md:h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
        <img
          src={project.image || "/dark_logo.png"}
          alt={project.name}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Title & Description */}
      <div className="mt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground normal-case">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Project Details Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Project Details:</h2>

        <div className="mt-6 surface-card rounded-xl border border-border p-6 md:p-10 shadow-sm">
          <ul className="grid gap-y-5 gap-x-8 md:grid-cols-1">
            {detailsList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground text-base">
                  <span className="font-semibold text-muted-foreground mr-1">
                    {item.label}:
                  </span>
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section
        id="project-cta"
        className="relative mt-20 overflow-hidden rounded-2xl"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-gold)" }}
        />

        {/* Hatch texture overlay */}
        <div className="absolute inset-0 hatch opacity-30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:px-12 md:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Start Your Project
          </span>

          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
            Interested in a project like this?
          </h2>

          <p className="max-w-lg text-base font-medium leading-relaxed text-white/80 md:text-lg">
            Our team is ready to discuss tenders, quotations, and partnership
            opportunities. Let's build something remarkable together.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-gold-deep hover:bg-white/90 shadow-lg px-8 text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
