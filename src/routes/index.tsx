import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ParticleField } from "@/components/ParticleField";
import { AIDashboardMockup } from "@/components/AIDashboardMockup";
import { NetworkNodes } from "@/components/NetworkNodes";
import { LogoMarquee } from "@/components/LogoMarquee";

import heroBg from "@/assets/hero-bg.jpg";
import {
  ArrowRight, Sparkles, Bot, Zap, Globe, Share2,
  CheckCircle2, Cpu, Rocket,
  UtensilsCrossed, Wrench, Trees, Plug, HardHat, Brush,
  Plus, Workflow, Brain, Clock, Sparkle,
  Inbox, ClipboardList, UserCog, Calendar, ShieldCheck, BadgeCheck,
  Star, Quote, TrendingUp, Utensils, Flame, Megaphone,
  CreditCard, Lock,
} from "lucide-react";

const founderStats = [
  { icon: Brain, t: "AI-Powered Solutions" },
  { icon: TrendingUp, t: "Business Growth Systems" },
  { icon: Sparkle, t: "Content Creation" },
  { icon: Workflow, t: "Marketing Automation" },
];

const caseStudies = [
  {
    icon: Utensils,
    name: "Masala Mingle Catering",
    industry: "Food & Catering",
    challenge: "Needed a professional brand identity and social media presence to attract more catering customers.",
    solution: "Created menu designs, promotional content, social media graphics, and a content strategy focused on community engagement.",
    results: [
      "Professional brand image established",
      "Consistent social media presence",
      "Increased customer inquiries",
      "Improved menu presentation",
    ],
  },
  {
    icon: Flame,
    name: "Premium Shawarma",
    industry: "Restaurant",
    challenge: "Low engagement and limited online visibility despite having quality food and competitive pricing.",
    solution: "Created promotional campaigns, product photography concepts, review generation strategies, and social media content plans.",
    results: [
      "Improved online presence",
      "Increased customer engagement",
      "Enhanced menu presentation",
      "Better brand recognition",
    ],
  },
  {
    icon: Megaphone,
    name: "Elevate Social",
    industry: "Marketing & Automation",
    challenge: "Create an agency capable of delivering high-value marketing services using AI and automation.",
    solution: "Built AI workflows, lead generation systems, website assets, content frameworks, and client onboarding processes.",
    results: [
      "Scalable service delivery",
      "Automated lead management",
      "Faster content production",
      "Streamlined client workflows",
    ],
  },
];

const useCases = [
  {
    icon: UtensilsCrossed,
    industry: "Restaurant",
    items: ["Content calendar & reels ideas", "Menu promotion campaigns", "Lead capture for catering"],
  },
  {
    icon: Wrench,
    industry: "Plumbing Business",
    items: ["Google Business support", "Service page copy", "Booking workflow setup"],
  },
  {
    icon: Brush,
    industry: "Cleaning Company",
    items: ["Quote intake form", "Follow-up automation", "Social content planning"],
  },
  {
    icon: Sparkle,
    industry: "Salon",
    items: ["Offer posts & promos", "Booking reminder system", "Client intake automation"],
  },
];

const workflowExamples = [
  "Website lead capture workflow",
  "Google Sheets CRM setup",
  "Telegram/email lead alerts",
  "AI chatbot setup",
  "Client intake automation",
  "Booking workflow",
  "Follow-up reminder system",
  "n8n workflow blueprint",
  "Human approval system",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevate Social — AI-Powered Marketing & Automation for Small Business Growth" },
      { name: "description", content: "AI-powered content, social media management, and automation systems for restaurants, contractors, plumbers, and local businesses. Get your free AI growth audit." },
      { property: "og:title", content: "Elevate Social — AI-Powered Marketing & Automation" },
      { property: "og:description", content: "Create content faster, automate repetitive tasks, and grow your business with AI-powered marketing systems." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustBadges = [
  "AI Automation",
  "Social Media Growth",
  "Website Design",
  "Lead Generation",
];

const whyAi = [
  { icon: Zap, t: "Faster Content Creation", d: "Generate weeks of on-brand content in hours, not days." },
  { icon: Workflow, t: "Smarter Workflows", d: "Automate the repetitive tasks slowing your business down." },
  { icon: Sparkle, t: "Better Consistency", d: "Show up every day with content that sounds like you." },
  { icon: Bot, t: "Business Automation", d: "Capture leads, book appointments, and follow up — automatically." },
  { icon: Clock, t: "More Time for Growth", d: "Stop spending nights on marketing. Focus on serving customers." },
  { icon: Brain, t: "AI-Powered Strategy", d: "Make decisions backed by modern AI tools, not guesses." },
];

const launchSystem = [
  "Facebook Setup",
  "Instagram Setup",
  "Professional Business Bio",
  "14-Day Content Plan",
  "10 AI-Generated Captions",
  "Hashtag Research",
  "AI Growth Audit",
  "Setup Checklist",
];

const services = [
  {
    icon: Rocket,
    badge: "From $149",
    title: "Business Presence Launch",
    desc: "Get your business looking professional online in days.",
    items: ["Facebook Setup", "Instagram Setup", "LinkedIn Setup", "Professional Bio Writing", "CTA Optimization", "Keywords & Hashtags"],
  },
  {
    icon: Share2,
    badge: "From $299/mo",
    title: "AI Content Engine",
    desc: "AI-powered content systems that keep your brand consistent.",
    items: ["30-Day Content Calendar", "30 Captions", "Hashtag Strategy", "Content Planning", "Canva Design Briefs"],
  },
  {
    icon: Workflow,
    badge: "From $299",
    title: "AI Workflow Automation Setup",
    desc: "Practical AI workflows that capture leads, organize info, and reduce manual work.",
    items: ["Lead Capture Workflow", "Google Sheets CRM", "Telegram/Email Alerts", "Client Intake Forms", "Booking & Follow-up"],
  },
  {
    icon: Bot,
    badge: "From $499/mo",
    title: "AI Growth System",
    desc: "Complete AI system for lead generation and business automation.",
    items: ["Lead Capture Systems", "AI Automation", "Client Onboarding Automation", "Appointment Booking Workflows", "AI Assistant Setup"],
    featured: true,
    popular: true,
  },
];

const resultsMetrics = [
  { value: 100, suffix: "+", label: "Content Assets Created" },
  { value: 10, suffix: "+", label: "Automation Workflows Built" },
  { value: 3, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "AI-Powered Systems" },
];

const growthSteps = [
  { n: "01", t: "Free Growth Audit", d: "We review your current presence and uncover the biggest growth opportunities." },
  { n: "02", t: "Strategy & Planning", d: "We design a tailored AI-powered content and automation roadmap." },
  { n: "03", t: "Content & Automation Setup", d: "We build the systems, content engines, and workflows that do the heavy lifting." },
  { n: "04", t: "Growth & Optimization", d: "We track results, refine, and scale what's working — every single month." },
];

const paymentMethods = [
  { name: "Credit & Debit Cards", icon: "💳" },
  { name: "PayPal", icon: "🅿" },
  { name: "Apple Pay", icon: "" },
  { name: "Google Pay", icon: "G Pay" },
  { name: "Bank Transfer", icon: "🏦" },
];

const aiSystems = [
  { icon: Sparkle, t: "AI Content Generator", d: "Creates content ideas, captions, hashtags, and full campaigns." },
  { icon: Inbox, t: "AI Lead Capture System", d: "Collects and organizes business inquiries automatically." },
  { icon: ClipboardList, t: "AI Proposal Generator", d: "Creates structured recommendations and client proposals." },
  { icon: UserCog, t: "AI Client Onboarding", d: "Organizes new client information without manual work." },
  { icon: Calendar, t: "AI Social Media Assistant", d: "Builds content plans and ongoing social media ideas." },
];

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants" },
  { icon: Wrench, title: "Plumbers" },
  { icon: Trees, title: "Landscapers" },
  { icon: Plug, title: "Electricians" },
  { icon: HardHat, title: "Contractors" },
  { icon: Brush, title: "Cleaning Services" },
  { icon: Rocket, title: "Startups" },
];

const demoProjects = [
  {
    icon: UtensilsCrossed,
    title: "Sample Restaurant Growth System",
    desc: "A complete AI-powered content calendar, captions, and local-marketing automation built for a sample restaurant brand.",
    tags: ["Content Calendar", "Local SEO", "AI Captions"],
  },
  {
    icon: Wrench,
    title: "Sample Plumbing Content Strategy",
    desc: "Service-based content plan with educational posts, before/after templates, and seasonal campaign ideas.",
    tags: ["Content Strategy", "Service Posts", "Campaign Plan"],
  },
  {
    icon: Workflow,
    title: "Sample AI Lead Capture Workflow",
    desc: "End-to-end n8n automation that captures inquiries, qualifies leads, and books appointments without manual work.",
    tags: ["n8n Workflow", "Lead Capture", "Booking"],
  },
];

const techStack = [
  { name: "OpenAI", icon: Brain },
  { name: "n8n", icon: Workflow },
  { name: "Google Workspace", icon: Globe },
  { name: "Canva", icon: Sparkle },
  { name: "Lovable", icon: Rocket },
  { name: "Automation Systems", icon: Cpu },
];

const auditPoints = [
  "Social Media Review",
  "Website Review",
  "Content Opportunities",
  "Automation Opportunities",
  "Growth Recommendations",
];

const faqs = [
  { q: "What services do you offer?", a: "AI-powered content creation, social media setup and management, professional business profiles, and end-to-end business automation systems built for small businesses." },
  { q: "How does AI improve marketing?", a: "AI lets us produce consistent content faster, automate repetitive workflows, respond to leads quickly, and continuously refine what works — at a fraction of the cost of a traditional agency." },
  { q: "Do you work worldwide?", a: "Yes. We serve small businesses globally and tailor each system to the local market and language." },
  { q: "Can you guarantee results?", a: "We don't promise unrealistic results. We focus on building strong systems, consistent content, and automation that gives your business the best possible foundation for growth." },
  { q: "How do we get started?", a: "Book a free AI growth audit. We'll review your current presence, identify opportunities, and show you exactly how AI-powered systems can help your business." },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="relative overflow-hidden bg-gradient-animated text-white"
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30 animate-kenburns"
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-mesh animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy" />

        {/* Floating glow orbs with parallax */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-electric/30 blur-3xl animate-float transition-transform duration-300"
          style={{ transform: `translate3d(${parallax.x * 40}px, ${parallax.y * 40}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-purple/25 blur-3xl animate-float transition-transform duration-300"
          style={{ transform: `translate3d(${parallax.x * -40}px, ${parallax.y * -40}px, 0)`, animationDelay: "2s" }}
        />

        <ParticleField count={26} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> AI-Powered Content for Modern Businesses
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
                AI-Powered Marketing & Automation That Helps{" "}
                <span className="text-shimmer">Small Businesses Grow Faster</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                We help restaurants, contractors, plumbers, landscapers, cleaning companies, and local
                businesses generate more leads, save time, and grow through AI-powered content,
                automation, websites, and marketing systems.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/free-audit"
                  className="btn-premium group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
                >
                  🚀 Book Your Free AI Growth Audit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-premium inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  📈 View Case Studies
                </Link>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {trustBadges.map((b) => (
                  <div key={b} className="inline-flex items-center gap-2 text-xs font-medium text-white/75">
                    <CheckCircle2 className="h-4 w-4 text-cyan" /> {b}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* AI Dashboard mockup with parallax */}
          <Reveal variant="zoom" delay={400}>
            <div
              className="relative transition-transform duration-300"
              style={{ transform: `perspective(1200px) rotateY(${parallax.x * 6}deg) rotateX(${parallax.y * -6}deg)` }}
            >
              <AIDashboardMockup />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS METRICS */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Proven Impact</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Results-Focused <span className="text-gradient">Growth Systems</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resultsMetrics.map((m, i) => (
              <Reveal key={m.label} variant="up" delay={i * 100}>
                <div className="glass relative overflow-hidden rounded-3xl border border-white/15 p-8 text-center lift-glow">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/20 blur-2xl" />
                  <Counter
                    to={m.value}
                    suffix={m.suffix}
                    className="relative font-display text-5xl font-bold text-shimmer md:text-6xl"
                  />
                  <p className="relative mt-3 text-sm font-medium text-white/70">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* WHY ELEVATE SOCIAL EXISTS */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-electric">Our Purpose</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Why <span className="text-gradient">Elevate Social</span> Exists
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Small businesses deserve access to the same AI-powered marketing and automation
            tools used by larger companies.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Elevate Social combines modern AI technology with practical business strategy to
            help businesses create content faster, automate repetitive tasks, and focus on
            growth.
          </p>
        </div>
      </section>

      {/* WHY AI MATTERS */}
      <section className="relative overflow-hidden bg-secondary/50 py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric">Why AI Matters</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Marketing built for the <span className="text-gradient">AI era</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              The businesses winning today are the ones using AI to move faster and operate smarter.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyAi.map((w, i) => (
              <Reveal key={w.t} variant="up" delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glow">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-accent opacity-0 blur-2xl transition group-hover:opacity-30" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-white shadow-elegant transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold">{w.t}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI BUSINESS LAUNCH SYSTEM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-hero p-10 text-white shadow-glow md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan">
                <BadgeCheck className="h-3.5 w-3.5" /> Featured Offer
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
                AI Business <span className="text-gradient">Launch System</span>
              </h2>
              <p className="mt-5 text-white/75">
                A complete starter package for businesses that need a professional online
                presence and AI-powered growth recommendations.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-wider text-cyan">Starting at</span>
                <span className="font-display text-5xl font-bold">$199</span>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                Launch My Business <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-cyan">What's included</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {launchSystem.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP YOU GROW */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric">Our Process</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              How We Help You <span className="text-gradient">Grow</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              A clear, proven 4-step path from audit to ongoing optimization.
            </p>
          </div>
          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
            {growthSteps.map((s, i) => (
              <Reveal key={s.n} variant="up" delay={i * 120}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-lg font-bold text-white shadow-glow">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (Pricing) */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric">Pricing</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Transparent plans built to <span className="text-gradient">scale with you</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Start where you are. Scale into full AI-powered automation when you're ready.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative flex flex-col rounded-3xl border p-8 transition hover:-translate-y-1 ${
                  s.featured
                    ? "border-cyan bg-navy text-white shadow-glow lg:scale-105"
                    : "border-border bg-card hover:border-electric/40 hover:shadow-elegant"
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                    🔥 Most Popular
                  </span>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.featured ? "bg-gradient-gold" : "bg-gradient-accent"} text-white`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                <p className={`mt-2 text-sm ${s.featured ? "text-white/70" : "text-muted-foreground"}`}>{s.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className={`font-display text-4xl font-bold ${s.featured ? "text-white" : "text-foreground"}`}>{s.badge}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                    s.featured
                      ? "bg-gradient-gold text-white shadow-glow"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURE PAYMENT METHODS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan">
              <Lock className="h-3.5 w-3.5" /> Secure Checkout
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
              Secure <span className="text-gradient">Payment Options</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We offer secure and flexible payment methods for clients worldwide.
            </p>
          </div>
          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {paymentMethods.map((p) => (
              <div key={p.name} className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glow">
                <span className="text-2xl font-bold tracking-tight text-foreground">{p.icon || <CreditCard className="h-6 w-6 text-electric" />}</span>
                <p className="text-center text-xs font-semibold text-muted-foreground">{p.name}</p>
              </div>
            ))}
          </div>
          <p className="relative mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-cyan" />
            All payments are processed through secure and encrypted payment gateways.
          </p>
        </div>
      </section>


      {/* MEET THE AI SYSTEMS */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-purple/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan">
              <Cpu className="h-3.5 w-3.5" /> AI Systems
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
              Meet the <span className="text-gradient">AI Systems</span>
            </h2>
            <p className="mt-5 text-white/70">
              Modular AI tools that work together to power your marketing and operations.
            </p>
          </div>

          {/* Animated workflow / network diagram */}
          <Reveal variant="zoom" delay={120}>
            <div className="relative mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan/20 via-purple/20 to-electric/20 blur opacity-60 -z-10" />
              <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-cyan">
                Live workflow · Lead → AI → Booking
              </p>
              <NetworkNodes className="h-48" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiSystems.map((s, i) => (
              <Reveal key={s.t} variant="up" delay={i * 90}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lift-glow">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent transition group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Active
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.d}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                    <span>System Module</span>
                    <span className="text-cyan">v1.0</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric">Industries We Help</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Built for local businesses</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.title} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-cyan/40 hover:shadow-glow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white transition group-hover:scale-110">
                  <i.icon className="h-6 w-6" />
                </div>
                <p className="font-display font-semibold">{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMONSTRATION PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-electric">Demonstration Projects</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            What an AI-powered system <span className="text-gradient">looks like</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Sample projects built to demonstrate our process. Not real client results.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {demoProjects.map((d) => (
            <div key={d.title} className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-elegant">
              <span className="inline-flex w-fit rounded-full bg-purple/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple">
                Demonstration Project
              </span>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-white">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK — scrolling marquee */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-electric">Technology Stack</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Built on <span className="text-gradient">modern AI tools</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12">
            <LogoMarquee items={techStack} />
          </div>
        </div>
      </section>

      {/* FREE AUDIT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-hero p-10 text-white shadow-glow md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan">Free AI Growth Audit</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Discover what's <span className="text-gradient">holding your business back</span>
              </h2>
              <p className="mt-5 text-white/75">
                Get a complimentary AI growth audit and find out exactly where content and
                automation can move the needle.
              </p>
              <Link
                to="/free-audit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                Claim Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan">Your audit includes:</p>
              <ul className="mt-4 space-y-3">
                {auditPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative overflow-hidden bg-secondary/40 py-24">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-purple/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold text-electric">
                <ShieldCheck className="h-3.5 w-3.5" /> Founder-Led Agency
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
                Meet The <span className="text-gradient">Founder</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Hi, I'm Laraib, founder of Elevate Social.</p>
              <p>I started Elevate Social with one goal:</p>
              <p className="rounded-2xl border-l-4 border-cyan bg-card/60 p-5 font-medium italic text-foreground">
                To help small businesses compete with larger companies by using AI, automation,
                content creation, and modern marketing systems — without paying expensive agency fees.
              </p>
              <p>
                Many local businesses struggle with inconsistent social media, outdated websites,
                and lack of time to market themselves effectively.
              </p>
              <p>
                At Elevate Social, we build systems that work around the clock — helping businesses
                generate leads, improve their online presence, and save valuable time through
                AI-powered automation.
              </p>
              <p>
                Whether you're a restaurant, contractor, plumber, cleaning company, or local service
                provider, our mission is to help you grow smarter, not harder.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {founderStats.map((s, i) => (
              <Reveal key={s.t} variant="up" delay={i * 90}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 lift-glow">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-sm font-semibold">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
            >
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-electric">Case Studies</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Featured <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Examples of branding, content, and automation systems built to help businesses grow.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} variant="up" delay={i * 90}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-white transition group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </div>
                <span className="mt-5 inline-flex w-fit rounded-full bg-electric/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-electric">
                  {c.industry}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{c.name}</h3>

                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan">Challenge</p>
                    <p className="mt-1 text-muted-foreground">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan">Solution</p>
                    <p className="mt-1 text-muted-foreground">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan">Results</p>
                    <ul className="mt-2 space-y-1.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/case-studies"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric transition group-hover:gap-3"
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              What <span className="text-gradient">Businesses Say</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 100}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-elegant">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-cyan/20" />
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-6 py-3 text-sm font-semibold text-electric transition hover:bg-electric/20"
            >
              <TrendingUp className="h-4 w-4" /> See How We Help Businesses Grow
            </Link>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-electric">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Common questions</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-5xl font-bold md:text-6xl">
            Ready To Grow Your Business With <span className="text-gradient">AI?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Stop wasting time trying to do everything yourself.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Let Elevate Social help you build a stronger online presence, automate repetitive
            tasks, and attract more customers using modern AI-powered marketing systems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-audit"
              className="btn-premium inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
            >
              <Rocket className="h-4 w-4" /> Book Your Free AI Growth Audit
            </Link>
            <Link
              to="/contact"
              className="btn-premium inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              <Sparkles className="h-4 w-4" /> Schedule A Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`overflow-hidden rounded-2xl border bg-card transition ${open ? "border-cyan/50 shadow-glow" : "border-border hover:border-cyan/30"}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-cyan/[0.03]"
      >
        <span className="font-display font-semibold">{q}</span>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan/10 text-cyan transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div>
          <p className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}
