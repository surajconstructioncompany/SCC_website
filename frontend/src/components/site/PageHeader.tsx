import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  videoSrc,
}: {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  videoSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-card/30">
      {videoSrc ? (
        <>
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-background/50 md:bg-gradient-to-r md:from-background/60 md:via-background/20 md:to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <div className="hatch absolute inset-0 opacity-40" aria-hidden />
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 z-10">
        {eyebrow ? (
          <p className="text-xs tracking-[0.3em] text-primary">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 text-4xl md:text-6xl">
          <span className="text-gold-gradient">{title}</span>
        </h1>
        <div className="gold-rule mt-5" />
        {description ? (
          typeof description === "string" ? (
            <p className="mt-5 max-w-2xl text-muted-foreground">
              {description}
            </p>
          ) : (
            <div className="mt-5 max-w-2xl text-muted-foreground">
              {description}
            </div>
          )
        ) : null}
      </div>
    </section>
  );
}
