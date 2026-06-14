import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatBot } from "@/components/ChatBot";
import logo from "@/assets/logo.png";
import "@/i18n";

// ─── Structured Data ──────────────────────────────────────────────────────────

const SITE_URL = "https://elevatesocially.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Elevate Social",
  legalName: "Elevate Social",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  description: "Elevate Social is an AI-powered marketing, automation, content creation, website design, and business growth agency helping small businesses attract more customers and automate their operations.",
  slogan: "Grow Smarter. Automate Faster. Elevate Your Business.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Laraib Ahmed",
    jobTitle: "Founder & AI Marketing Strategist",
    url: `${SITE_URL}/about`,
    email: "mailto:masalaminglecatering@gmail.com",
    knowsAbout: ["AI marketing automation", "small business growth", "content creation", "halal business marketing", "local SEO"],
  },
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  contactPoint: [{
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "mailto:masalaminglecatering@gmail.com",
    url: `${SITE_URL}/contact`,
    availableLanguage: ["English", "French", "Arabic", "Urdu", "Hindi", "Bengali", "Chinese", "Spanish"],
  }],
  sameAs: ["https://www.instagram.com/elevates_social", "https://www.facebook.com/share/17dkPgp1E4/", "https://www.linkedin.com/company/elevatesocial"],
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
    { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
  ],
  knowsLanguage: ["en", "fr", "ar", "ur", "hi", "bn", "zh", "es"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Marketing & Automation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Presence Launch", description: "Professional website design and Google Business Profile setup for local businesses.", url: `${SITE_URL}/services` }, price: "149", priceCurrency: "CAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Content Engine", description: "Monthly AI-powered content creation: social media posts, captions, and email newsletters.", url: `${SITE_URL}/services` }, price: "299", priceCurrency: "CAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation Setup", description: "One-time AI workflow automation setup: review collection, lead follow-up, appointment reminders.", url: `${SITE_URL}/ai-solutions` }, price: "299", priceCurrency: "CAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Growth System", description: "Full-service monthly growth partnership: content, automation, ads management, SEO.", url: `${SITE_URL}/services` }, price: "499", priceCurrency: "CAD" },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Elevate Social",
  description: "AI-powered marketing, automation, and content creation for small businesses. Get your free AI Growth Audit today.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["en", "fr", "ar", "ur", "hi", "bn", "zh", "es"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What does Elevate Social do?", acceptedAnswer: { "@type": "Answer", text: "Elevate Social is an AI-powered marketing and automation agency that helps small businesses — restaurants, contractors, plumbers, landscapers, and local service providers — get more customers online. We handle website design, AI content creation, social media, automation workflows, and local SEO." } },
    { "@type": "Question", name: "How much does AI marketing cost for a small business?", acceptedAnswer: { "@type": "Answer", text: "Elevate Social's services start at $149 CAD for a Business Presence Launch (professional website + Google profile), $299/month for the AI Content Engine, and $499/month for the full AI Growth System. We also offer a free AI Growth Audit with no obligation." } },
    { "@type": "Question", name: "Do you work with halal restaurants and South Asian food businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes — Elevate Social specialises in marketing for halal restaurants, South Asian food businesses, and multicultural local businesses. We understand the community, the culture, and the specific ways your customers search online." } },
    { "@type": "Question", name: "What is an AI Growth Audit?", acceptedAnswer: { "@type": "Answer", text: "The free AI Growth Audit is a personalised analysis of your business's online presence. We review your website, Google Business Profile, social media, competitor positioning, and local SEO gaps, then deliver a clear action plan. It's completely free with no obligation to buy." } },
    { "@type": "Question", name: "Can Elevate Social help businesses outside Canada?", acceptedAnswer: { "@type": "Answer", text: "Yes. While Elevate Social is based in Canada, we serve small businesses in the United States, United Kingdom, Australia, and the GCC region. Our website supports English, French, Arabic, Urdu, Hindi, Bengali, Chinese, and Spanish." } },
    { "@type": "Question", name: "How quickly will I see results from AI marketing?", acceptedAnswer: { "@type": "Answer", text: "Most clients see measurable improvements within 30 to 60 days. Automation workflows produce results immediately after setup. Content and SEO improvements compound over 90 days." } },
  ],
};

// ─── 404 / Error Components ───────────────────────────────────────────────────

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elevate Social | AI Marketing & Automation for Small Businesses" },
      { name: "description", content: "Elevate Social helps restaurants, contractors, and local businesses get more customers with AI-powered marketing, automation, and content creation. Get your free AI Growth Audit — no obligation." },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "vRcacka93KC1ZsRfyXJT917jcRSS4q6S6VCt1AmWL2k" },
      { name: "author", content: "Laraib Ahmed, Elevate Social" },
      { name: "theme-color", content: "#6c2bd9" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:title", content: "Elevate Social | AI Marketing & Automation for Small Businesses" },
      { property: "og:description", content: "AI-powered marketing, automation, and content creation for restaurants, contractors, and local businesses. Start with a free AI Growth Audit." },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Elevate Social" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elevate Social | AI Marketing & Automation for Small Businesses" },
      { name: "twitter:description", content: "AI-powered marketing and automation for restaurants, contractors, and local businesses. Free AI Growth Audit — no obligation." },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "apple-touch-icon", href: logo },
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hreflang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hreflang: "fr", href: `${SITE_URL}/?lang=fr` },
      { rel: "alternate", hreflang: "ar", href: `${SITE_URL}/?lang=ar` },
      { rel: "alternate", hreflang: "ur", href: `${SITE_URL}/?lang=ur` },
      { rel: "alternate", hreflang: "hi", href: `${SITE_URL}/?lang=hi` },
      { rel: "alternate", hreflang: "bn", href: `${SITE_URL}/?lang=bn` },
      { rel: "alternate", hreflang: "zh", href: `${SITE_URL}/?lang=zh` },
      { rel: "alternate", hreflang: "es", href: `${SITE_URL}/?lang=es` },
      { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "sitemap", type: "application/xml", href: `${SITE_URL}/sitemap.xml` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <ChatBot />
      </div>
    </QueryClientProvider>
  );
      }
