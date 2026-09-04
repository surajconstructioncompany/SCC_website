import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/boards", label: "Our Partners" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <SlideUp
      yOffset={-20}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <StaggerContainer
          className="flex items-center gap-3"
          staggerChildren={0.1}
        >
          <StaggerItem>
            <Link to="/" className="flex items-center gap-3">
              <>
                <img
                  src="/light_logo.webp"
                  alt="Suraj Construction Company logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain dark:hidden"
                />
                <img
                  src="/dark_logo.webp"
                  alt="Suraj Construction Company logo"
                  width={56}
                  height={56}
                  className="hidden h-14 w-14 object-contain dark:block"
                />
              </>
              <span className="hidden leading-none sm:block">
                <span className="block font-display text-2xl font-bold tracking-wide text-gold-gradient">
                  Suraj Construction
                </span>
                <span className="block text-[0.65rem] tracking-[0.28em] text-muted-foreground">
                  ROAD · INFRA · DEVELOPMENT
                </span>
              </span>
            </Link>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer
          className="hidden items-center gap-7 lg:flex"
          delayChildren={0.2}
          staggerChildren={0.1}
        >
          {nav.map((item) => (
            <StaggerItem key={item.to}>
              {item.to === "/projects" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary text-muted-foreground flex items-center gap-1 focus:outline-none">
                      {item.label} <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-40 bg-background border-border"
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        to="/projects"
                        search={{ status: "completed" }}
                        className="cursor-pointer w-full uppercase tracking-wider text-xs font-medium"
                      >
                        Completed
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/projects"
                        search={{ status: "ongoing" }}
                        className="cursor-pointer w-full uppercase tracking-wider text-xs font-medium"
                      >
                        Ongoing
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer
          className="flex items-center gap-2"
          delayChildren={0.4}
          staggerChildren={0.1}
        >
          <StaggerItem>
            <ThemeToggle />
          </StaggerItem>

          <StaggerItem>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-card">
                <nav className="mt-10 flex flex-col gap-5">
                  {nav.map((item) =>
                    item.to === "/projects" ? (
                      <div key={item.to} className="flex flex-col gap-3">
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="font-display text-2xl tracking-wide text-foreground hover:text-primary"
                        >
                          {item.label}
                        </Link>
                        <div className="flex flex-col gap-3 pl-4">
                          <Link
                            to="/projects"
                            search={{ status: "completed" }}
                            onClick={() => setOpen(false)}
                            className="font-display text-lg tracking-wide text-muted-foreground hover:text-primary uppercase"
                          >
                            Completed
                          </Link>
                          <Link
                            to="/projects"
                            search={{ status: "ongoing" }}
                            onClick={() => setOpen(false)}
                            className="font-display text-lg tracking-wide text-muted-foreground hover:text-primary uppercase"
                          >
                            Ongoing
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl tracking-wide text-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SlideUp>
  );
}
