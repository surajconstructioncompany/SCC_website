import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <StaggerContainer className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <StaggerItem className="md:col-span-2">
          <>
            <img
              src="/light_logo.webp"
              alt="Suraj Construction Company"
              width={140}
              height={140}
              loading="lazy"
              className="h-24 w-24 object-contain dark:hidden"
            />
            <img
              src="/dark_logo.webp"
              alt="Suraj Construction Company"
              width={140}
              height={140}
              loading="lazy"
              className="hidden h-24 w-24 object-contain dark:block"
            />
          </>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Suraj Construction Company builds highways, rural roads, bridges and
            urban infrastructure with certified quality control and on-time
            delivery since 2004.
          </p>
        </StaggerItem>

        <StaggerItem>
          <h3 className="text-lg text-primary">Company</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary">
              About us
            </Link>
            <Link to="/boards" className="hover:text-primary">
              Our Partners
            </Link>
            <Link to="/projects" className="hover:text-primary">
              Projects
            </Link>
            <Link to="/careers" className="hover:text-primary">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </StaggerItem>

        <StaggerItem>
          <h3 className="text-lg text-primary">Reach us</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href="https://www.google.com/maps/place/Suraj+Construction+Company/@29.1179956,75.6989421,19.09z/data=!4m14!1m7!3m6!1s0x3913cdc18b3e7efd:0x9feff8507dac20d!2sSuraj+Construction+Company!8m2!3d29.1178809!4d75.6995479!16s%2Fg%2F11p189qc8j!3m5!1s0x3913cdc18b3e7efd:0x9feff8507dac20d!8m2!3d29.1178809!4d75.6995479!16s%2Fg%2F11p189qc8j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-primary"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              125-126, Officers Colony, Rajgarh Road, Azad Nagar, Hisar-125001
            </a>
            <a
              href="mailto:surajcons.company@gmail.com"
              className="flex gap-2 hover:text-primary"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              surajcons.company@gmail.com
            </a>
          </div>
        </StaggerItem>
      </StaggerContainer>
      <FadeIn className="grid grid-cols-1 gap-2 border-t border-border/60 px-4 py-5 text-xs text-muted-foreground md:grid-cols-3 md:gap-0">
        <div className="hidden md:block"></div>
        <p className="text-center">
          © {new Date().getFullYear()} Suraj Construction Company. All Rights Reserved.
        </p>
        <p 
          className="text-center md:text-right"
          dangerouslySetInnerHTML={{ __html: atob("V2Vic2l0ZSBEZXNpZ24gJiBEZXZlbG9wbWVudCBieSA8YSBocmVmPSJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcHJhdGVla25hcmFpbiIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgY2xhc3M9ImZvbnQtbWVkaXVtIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9ycyI+UHJhdGVlayBOYXJhaW48L2E+") }}
        />
      </FadeIn>
    </footer>
  );
}
