import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, LogIn, UserPlus, Sparkles } from "lucide-react";
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
      <header className="sticky top-0 z-50">

        {/* ── TOP BRAND BANNER ── */}
        <div className="relative overflow-hidden bg-gradient-to-r from-navy-deep via-navy to-[#1e1b4b] border-b border-white/10">
          {/* subtle grid overlay */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          {/* glow blobs */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-cyan/20 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-purple/20 blur-3xl pointer-events-none" />

          <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">

            {/* LEFT: Logo + Full Name */}
            <Link to="/" className="group flex items-center gap-5 min-w-0">
              {/* Logo — large, full square, no crop */}
              <span className="relative shrink-0">
                <img
                  src={logo}
                  alt="Elevate Socials Agency"
                  className="h-14 w-14 object-contain bg-white p-1 shadow-elegant ring-1 ring-border transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow animate-logo-in rounded-full"
                />
                {/* animated ring */}
                <span className="pointer-events-none absolute -inset-1 rounded-2xl ring-2 ring-cyan/20 animate-ping-soft" />
              </span>

              {/* Brand text */}
              <span className="flex flex-col leading-none min-w-0">
                <span className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Elevate{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #06B6D4 0%, #8B5CF6 50%, #2563EB 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Socials
                  </span>
                </span>
                <span className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Agency</span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-semibold text-cyan">
                    <Sparkles className="h-2.5 w-2.5" /> AI-Powered
                  </span>
                </span>
                <span className="mt-1.5 hidden text-[11px] font-medium text-white/35 tracking-wide md:block">
                  AI-Powered Content for Modern Businesses
                </span>
              </span>
            </Link>

            {/* RIGHT: Auth buttons */}
            <div className="hidden items-center gap-2 lg:flex shrink-0">
              <button
                onClick={() => setAuthMode("login")}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:border-cyan/40 hover:bg-white/10 hover:text-white"
              >
                <LogIn className="h-3.5 w-3.5" /> Sign In
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className="btn-premium inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                <UserPlus className="h-3.5 w-3.5" /> Sign Up Free
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── NAV BAR ── */}
        <div className="bg-background/95 border-b border-border/60 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative px-4 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gradient-gold after:transition-transform hover:after:scale-x-100"
                  activeProps={{ className: "text-foreground after:scale-x-100" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Mobile auth row in collapsed nav */}
            <div className="flex items-center gap-2 py-2 lg:hidden">
              <button onClick={() => setAuthMode("login")} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <LogIn className="h-3 w-3" /> Sign In
              </button>
              <button onClick={() => setAuthMode("signup")} className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-white">
                <UserPlus className="h-3 w-3" /> Sign Up
              </button>
            </div>

            {/* CTA in nav bar — desktop */}
            <Link
              to="/free-audit"
              className="hidden rounded-full bg-navy text-white border border-cyan/30 px-5 py-2 text-xs font-semibold tracking-wide transition hover:shadow-glow hover:border-cyan/60 lg:inline-flex"
            >
              🎯 Free AI Audit
            </Link>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {open && (
          <div className="border-b border-border bg-background/98 backdrop-blur-lg lg:hidden">
            <div className="flex flex-col px-6 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/40 py-3 text-sm font-medium last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <button onClick={() => { setOpen(false); setAuthMode("login"); }} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium">
                  <LogIn className="h-3.5 w-3.5" /> Sign In
                </button>
                <button onClick={() => { setOpen(false); setAuthMode("signup"); }} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
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
