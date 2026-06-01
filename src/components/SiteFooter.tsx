import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Elevate Socials Agency" className="h-11 w-11 rounded-full object-contain bg-white p-0.5" />
              <span className="font-display text-lg font-semibold text-white">
                Elevate <span className="text-gold">Socials</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Helping Small Businesses Grow Through AI-Powered Content & Automation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/ai-solutions" className="hover:text-gold">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
              <li><Link to="/free-audit" className="hover:text-gold">Free Audit</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Get Started</h4>
            <p className="mt-4 text-sm">Book a free growth strategy call today.</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-navy shadow-gold transition hover:opacity-90"
            >
              Book Free Call
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Elevate Social. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
