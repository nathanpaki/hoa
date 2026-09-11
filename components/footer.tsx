import Link from "next/link";
import { Home, MapPin } from "lucide-react";
import { tagline } from "@/lib/constants";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Fees", href: "/fees" },
  { label: "Board", href: "/board" },
  // { label: "Committees", href: "/committees" },
  { label: "Covenants & By-Laws", href: "/plat" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* HOA Information */}{" "}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary p-3 shadow-sm">
                <Home className="h-5 w-5 text-primary-foreground" />{" "}
              </div>

              <div>
                <h2 className="font-semibold tracking-tight">
                  Deerfield Home Owners Association
                </h2>
                <p className="text-xs text-muted-foreground"></p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              A well-maintained residential community offering comfortable
              homes, convenient amenities, and a welcoming neighborhood in West
              Knoxville.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Address */}
          <div>
            <h3 className="font-semibold">Deerfield HOA</h3>

            <div className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <address className="not-italic leading-6">
                1806 Elmhurst Way
                <br />
                Knoxville, TN 37923
              </address>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Deerfield Home Owners Association.
              All rights reserved.
            </p>

            <p>{tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
