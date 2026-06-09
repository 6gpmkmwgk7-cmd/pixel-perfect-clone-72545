import { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { SUPPORTED_LANGUAGES, applyLanguage } from "@/i18n";
import i18n from "@/i18n";

interface Props {
  variant?: "header" | "compact";
}

export function LanguageSelector({ variant = "header" }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("elevate_lang") : null;
    const initial = stored && SUPPORTED_LANGUAGES.some((l) => l.code === stored) ? stored : "en";
    applyLanguage(initial);
    setCurrent(initial);
    const handler = (lng: string) => setCurrent(lng);
    i18n.on("languageChanged", handler);
    return () => { i18n.off("languageChanged", handler); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  const active = SUPPORTED_LANGUAGES.find((l) => l.code === current) ?? SUPPORTED_LANGUAGES[0];

  const triggerClass = variant === "header"
    ? "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur transition hover:border-cyan/40 hover:bg-white/10 hover:text-white"
    : "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 transition hover:border-cyan/40 hover:text-white";

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={triggerClass}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{active.native}</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-[60] mt-2 max-h-72 w-44 overflow-y-auto rounded-2xl border border-white/15 bg-navy/95 p-1.5 shadow-[0_10px_40px_rgba(6,182,212,0.25)] backdrop-blur"
        >
          {SUPPORTED_LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => { applyLanguage(l.code); setCurrent(l.code); setOpen(false); }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition hover:bg-white/10 ${
                  l.code === current ? "bg-white/10 text-cyan" : "text-white/80"
                }`}
              >
                <span className="font-medium">{l.native}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">{l.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
