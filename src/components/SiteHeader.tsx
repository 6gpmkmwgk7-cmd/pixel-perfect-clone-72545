import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import logo from "@/assets/logo.png";
import { AuthModal } from "@/components/AuthModal";

const nav = [
  { to: "/", label: "Home" },
  { to: "/ai-solutions", label: "AI Solutions" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/free-audit", label: "Free Audit" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative inline-flex shrink-0">
              <img
                src={logo}
                alt="Elevate Socials Agency"
                className="h-14 w-14 rounded-xl object-contain bg-white p-1 shadow-elegant ring-1 ring-border transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow animate-logo-in"
              />
              <span className="pointer-events-none absolute -inset-0.5 rounded-xl ring-2 ring-cyan/30 animate-ping-soft" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-tight">
                Elevate <span className="text-gradient">Socials</span>
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Agency
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={() => setAuthMode("login")}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-electric/40 hover:text-foreground"
            >
              <LogIn className="h-3.5 w-3.5" /> Sign In
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
            >
              <UserPlus className="h-3.5 w-3.5" /> Sign Up
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border lg:hidden">
            <div className="flex flex-col px-6 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <button
                  onClick={() => { setOpen(false); setAuthMode("login"); }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium"
                >
                  <LogIn className="h-3.5 w-3.5" /> Sign In
                </button>
                <button
                  onClick={() => { setOpen(false); setAuthMode("signup"); }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <UserPlus className="h-3.5 w-3.5" /> Sign Up Free
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {authMode && <AuthModal defaultMode={authMode} onClose={() => setAuthMode(null)} />}
    </>
  );
}
