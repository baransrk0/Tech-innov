import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Smartphone,
  ShieldCheck,
  Factory,
  CloudSun,
  Map,
  Droplets,
  BarChart3,
  Users,
  Building2,
  Banknote,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Tractor,
  Database,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Market", href: "#market" },
  { label: "Business Model", href: "#business-model" },
  { label: "Forecast", href: "#forecast" },
];

const problemPoints = [
  "Mid-scale farmers manage enough land for strong ROI, but cannot afford hardware-heavy precision agriculture.",
  "Rising water, fertilizer, and operational costs reduce margins every season.",
  "Climate volatility makes intuition-based farming less reliable.",
  "Insurers, banks, and industrial buyers struggle with visibility across fragmented agricultural operations.",
];

const solutionCards = [
  {
    icon: Smartphone,
    title: "For Farmers",
    text: "Precision without capital. AgroRoute AI delivers field intelligence through a smartphone, without sensors or expensive machinery.",
  },
  {
    icon: ShieldCheck,
    title: "For Insurers",
    text: "Objective claims validation through satellite-based monitoring and automated traffic-light risk assessment.",
  },
  {
    icon: Factory,
    title: "For Industrial Partners",
    text: "Supply chain visibility across contracted hectares to optimize harvest planning, factory intake, and logistics.",
  },
];

const workflow = [
  {
    icon: Map,
    title: "Satellite + Weather Data",
    text: "Sentinel-2 imagery and hyper-local weather signals are continuously collected and normalized.",
  },
  {
    icon: Database,
    title: "AI Decision Engine",
    text: "Agronomic models convert raw geospatial data into simple recommendations for irrigation, crop health, and fallow decisions.",
  },
  {
    icon: Smartphone,
    title: "Actionable Mobile Guidance",
    text: "Farmers receive clear tasks, alerts, and field-level insights through a mobile-first interface.",
  },
  {
    icon: Building2,
    title: "Institutional Intelligence",
    text: "Dashboards and reports support insurers, banks, cooperatives, and industrial off-takers.",
  },
];

const featureCards = [
  {
    icon: Droplets,
    title: "Dynamic Resource Scheduling",
    text: "Use water and fertilizer more efficiently with timing-based recommendations.",
  },
  {
    icon: Sprout,
    title: "Smart Crop Guidance",
    text: "Monitor vegetation health, field stress, and crop development in one place.",
  },
  {
    icon: Leaf,
    title: "Fallow Decision Support",
    text: "Support soil health and better seasonal planning with land-use recommendations.",
  },
  {
    icon: BarChart3,
    title: "ROI-Oriented Insights",
    text: "Translate complex indices into measurable efficiency, savings, and productivity improvements.",
  },
];

const segmentCards = [
  {
    icon: Tractor,
    title: "Primary Segment",
    subtitle: "B2C",
    text: "Small-to-medium farmers in Turkey, especially the 50–500 decare missing middle.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    subtitle: "B2B",
    text: "TARSİM and insurers seeking faster, more objective claim validation.",
  },
  {
    icon: Building2,
    title: "Industrial Buyers",
    subtitle: "B2B",
    text: "Partners like Konya Şeker needing field-level supply chain visibility.",
  },
  {
    icon: Banknote,
    title: "Agri-Banks",
    subtitle: "B2B",
    text: "Financial institutions using farming risk scores to de-risk credit portfolios.",
  },
];

const businessModel = [
  {
    title: "Revenue Streams",
    items: [
      "Annual farmer micro-subscriptions",
      "Insurance claim validation fees",
      "Banking risk reports",
      "B2B data and dashboard services",
      "Lead-generation commissions",
    ],
  },
  {
    title: "Channels",
    items: [
      "Tarım Kredi cooperative network",
      "Mobile app stores",
      "Rural digital campaigns",
      "Institutional dashboard integrations",
      "Partner-led onboarding",
    ],
  },
  {
    title: "Key Partners",
    items: [
      "Tarım Kredi Kooperatifleri",
      "Konya Şeker",
      "TARSİM",
      "Ankara University",
      "ESA / Copernicus / weather providers",
    ],
  },
];

const forecastRows = [
  { period: "1 Month (Pilot)", b2c: "5,000 TL", b2b: "30,000 TL", total: "35,000 TL" },
  { period: "First Quarter", b2c: "45,000 TL", b2b: "180,000 TL", total: "225,000 TL" },
  { period: "Full Year", b2c: "450,000 TL", b2b: "1,236,000 TL", total: "1,686,000 TL" },
];

const differentiators = [
  "Zero hardware onboarding",
  "Mobile-first experience",
  "Asset-light business model",
  "AI-powered agronomic support",
  "Multi-sided revenue model",
  "Built for Turkey’s missing middle",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge variant="secondary" className="rounded-full px-4 py-1 text-xs tracking-wide">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

export default function AgroRouteAIWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg">AgroRoute AI</div>
              <div className="text-xs font-medium text-slate-500">Precision without capital</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild className="rounded-2xl bg-emerald-600 px-5 hover:bg-emerald-700">
            <a href="#forecast">View Opportunity</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-full bg-emerald-100 px-4 py-1 text-emerald-800 hover:bg-emerald-100">
                  Hardware-Free Precision Agriculture
                </Badge>
                <Badge className="rounded-full bg-slate-100 px-4 py-1 text-slate-700 hover:bg-slate-100">
                  Mobile-First
                </Badge>
                <Badge className="rounded-full bg-slate-100 px-4 py-1 text-slate-700 hover:bg-slate-100">
                  B2C + B2B Data Model
                </Badge>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Turning ordinary smartphones into field intelligence tools for farmers.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  AgroRoute AI helps Turkey’s underserved 50–500 decare farmers optimize yield,
                  reduce resource waste, and manage risk—without expensive sensors, machinery, or
                  hardware installation.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl bg-emerald-600 px-6 hover:bg-emerald-700">
                  <a href="#solution">
                    Explore the Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-slate-300 px-6">
                  <a href="#business-model">See Business Model</a>
                </Button>
              </div>

              <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: "50–500", label: "Decare target segment" },
                  { value: "0", label: "Hardware required" },
                  { value: "1.686M TL", label: "Year 1 revenue forecast" },
                ].map((stat) => (
                  <Card key={stat.label} className="rounded-3xl border-0 bg-white/80 shadow-sm backdrop-blur">
                    <CardContent className="p-5">
                      <div className="text-2xl font-bold tracking-tight text-slate-950">{stat.value}</div>
                      <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <Card className="overflow-hidden rounded-[2rem] border-0 bg-slate-950 text-white shadow-2xl">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="space-y-6 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 rounded-3xl bg-white/5 p-5">
                      <div>
                        <div className="text-sm text-slate-300">Pocket Assistant</div>
                        <div className="mt-2 text-2xl font-semibold">Today’s Field Roadmap</div>
                      </div>
                      <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-300">
                        <CloudSun className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        ["Crop Health", "Stable growth detected from satellite imagery"],
                        ["Irrigation", "Recommended within 24 hours due to moisture drop"],
                        ["Risk", "Weather volatility warning for the upcoming 3 days"],
                      ].map(([title, text]) => (
                        <div key={title} className="rounded-3xl bg-white/5 p-5">
                          <div className="text-sm font-medium text-emerald-300">{title}</div>
                          <div className="mt-2 text-sm leading-6 text-slate-200">{text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl bg-emerald-500/10 p-5">
                        <div className="text-sm text-slate-300">Water efficiency</div>
                        <div className="mt-1 text-2xl font-bold">Optimized</div>
                      </div>
                      <div className="rounded-3xl bg-blue-500/10 p-5">
                        <div className="text-sm text-slate-300">Field status</div>
                        <div className="mt-1 text-2xl font-bold">Monitored</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="problem" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The Challenge"
              title="Agriculture has a large underserved middle."
              description="Traditional precision agriculture creates value, but high upfront hardware costs exclude the very farmers who need productivity gains most."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {problemPoints.map((point, index) => (
                <Card key={index} className="rounded-3xl border-slate-200/70 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                      <Globe className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{point}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The Solution"
              title="A static presentation of the AgroRoute AI value proposition."
              description="AgroRoute AI combines satellite imagery, weather intelligence, and AI-driven decision support in a simple, accessible interface built for real agricultural workflows."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {solutionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.title} className="rounded-3xl border-0 bg-white shadow-sm ring-1 ring-slate-200/70">
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-slate-600">{card.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How It Works"
              title="From raw data to field-level action."
              description="The product experience is designed to make advanced agronomic intelligence understandable and usable without specialist training."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="rounded-3xl border-slate-200/70 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Core Product Capabilities"
              title="Built for simplicity, relevance, and daily decision-making."
              description="Every feature is aimed at turning complexity into clear agricultural action for the user."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="rounded-3xl border-0 bg-slate-900 text-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="market" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Customer Segments"
              title="A multi-sided business model with one clear entry point."
              description="Farmer adoption drives the platform, while institutional partnerships expand monetization and strengthen defensibility."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {segmentCards.map((segment) => {
                const Icon = segment.icon;
                return (
                  <Card key={segment.title} className="rounded-3xl border-slate-200/70 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="rounded-full">{segment.subtitle}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{segment.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{segment.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="business-model" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Business Model"
              title="Trust-led distribution with scalable data monetization."
              description="AgroRoute AI combines freemium farmer acquisition with high-margin institutional services powered by the same intelligence layer."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {businessModel.map((block) => (
                <Card key={block.title} className="rounded-3xl border-0 bg-white shadow-sm ring-1 ring-slate-200/70">
                  <CardHeader>
                    <CardTitle>{block.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="forecast" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Revenue Forecast"
              title="A staged revenue model across pilot, quarter, and year."
              description="The presentation forecast combines B2C subscriptions with B2B data services, insurance validation, and institutional reporting."
            />

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">
                      <th className="px-6 py-5 text-sm font-semibold text-slate-900">Period</th>
                      <th className="px-6 py-5 text-sm font-semibold text-slate-900">B2C Revenue</th>
                      <th className="px-6 py-5 text-sm font-semibold text-slate-900">B2B Revenue</th>
                      <th className="px-6 py-5 text-sm font-semibold text-slate-900">Total Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forecastRows.map((row, index) => (
                      <tr key={row.period} className={index !== forecastRows.length - 1 ? "border-b border-slate-100" : ""}>
                        <td className="px-6 py-5 text-sm font-medium text-slate-900">{row.period}</td>
                        <td className="px-6 py-5 text-sm text-slate-600">{row.b2c}</td>
                        <td className="px-6 py-5 text-sm text-slate-600">{row.b2b}</td>
                        <td className="px-6 py-5 text-sm font-semibold text-emerald-700">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Card className="rounded-3xl border-slate-200/70 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">B2C Assumptions</h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <p>Target segment: 10,000 farmers</p>
                    <p>Premium conversion: 300 paying users</p>
                    <p>Average farm size: 100 decares</p>
                    <p>Annual price: 15 TL per decare</p>
                    <p className="font-medium text-slate-900">Year 1 B2C total: 450,000 TL</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border-slate-200/70 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">B2B Assumptions</h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <p>TARSİM validation: 1% of 636,000 claims × 100 TL = 636,000 TL</p>
                    <p>Banking risk reports: 5 banks × 100 reports × 1,200 TL = 600,000 TL</p>
                    <p className="font-medium text-slate-900">Year 1 B2B total: 1,236,000 TL</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="rounded-[2rem] border-0 bg-emerald-600 text-white shadow-xl">
                <CardContent className="p-8 sm:p-10">
                  <Badge className="rounded-full bg-white/15 px-4 py-1 text-white hover:bg-white/15">
                    Why It Matters
                  </Badge>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                    Democratizing precision agriculture for the missing middle.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50">
                    AgroRoute AI is designed as an asset-light, presentation-ready concept that brings
                    together farmer productivity, institutional efficiency, and scalable agricultural
                    intelligence in a single platform story.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-2xl bg-white px-6 text-emerald-700 hover:bg-emerald-50">
                      <a href="#top">Back to Top</a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/30 bg-transparent px-6 text-white hover:bg-white/10">
                      <a href="#solution">Review Features</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-slate-950 text-white shadow-xl">
                <CardContent className="p-8 sm:p-10">
                  <h3 className="text-2xl font-semibold">Presentation Snapshot</h3>
                  <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                    <div className="flex items-start gap-3">
                      <Users className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <span>Built around the farmer as the primary user and trust-based institutional distribution.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <span>Combines freemium adoption with higher-margin B2B intelligence and reporting services.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CloudSun className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <span>Transforms satellite and weather data into simple recommendations instead of complex dashboards.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                      <span>Supports stronger yields, lower resource waste, and better long-term land management.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">AgroRoute AI</div>
            <p className="mt-1 text-sm text-slate-500">
              Static presentation website concept for UI and project storytelling.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-4 py-2">No backend</span>
            <span className="rounded-full bg-slate-100 px-4 py-2">No Axios</span>
            <span className="rounded-full bg-slate-100 px-4 py-2">Presentation-ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
