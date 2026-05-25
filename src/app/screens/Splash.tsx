import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const stats = [
  { value: "1,200+", label: "verified creators" },
  { value: "98%", label: "customer satisfaction" },
  { value: "48 hrs", label: "average response time" },
];

const offers = [
  {
    title: "Browse premium creative services",
    description:
      "Explore talented creators by category, compare portfolios, and book the right expert for your campaign.",
    badge: "For customers",
    action: "Explore categories",
    path: "/categories",
  },
  {
    title: "Showcase your creative expertise",
    description:
      "Creators can build profiles, share examples, and manage bookings from a polished dashboard built for growth.",
    badge: "For creators",
    action: "Create your profile",
    path: "/register",
  },
  {
    title: "Stay in control from start to finish",
    description:
      "Use real-time updates, trusted communication, and smooth onboarding to keep every project moving confidently.",
    badge: "Professional workflow",
    action: "Contact us",
    path: "/contact",
  },
];

const benefits = [
  {
    title: "Curated talent",
    description:
      "Only verified creators with clear profiles and relevant experience are featured for customers.",
    icon: ShieldCheck,
  },
  {
    title: "Fast discovery",
    description:
      "Search by niche, view work samples, and find the right fit in seconds.",
    icon: Globe2,
  },
  {
    title: "Reliable communication",
    description:
      "Keep bookings organized with a simple workflow designed for both sides of the marketplace.",
    icon: Users,
  },
];

const steps = [
  "Create or log in to your account",
  "Browse categories and shortlist creators",
  "Confirm booking details and begin your project",
];

export default function Splash() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Clip Crew</p>
            <p className="text-sm text-slate-500">Creative booking made simple</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link to="/" className="font-semibold text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-4 bg-blue-50 text-blue-700">
              Trusted by modern brands and independent creators
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The professional platform for booking creative talent with confidence.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Clip Crew connects customers with top-tier creators for media, design, content, and brand services — all in one polished experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/categories">
                  Browse customer services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">Join as creator</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle>Why teams choose Clip Crew</CardTitle>
              <CardDescription>
                A premium experience for discovering, booking, and managing creative work.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src="/creative-studio.svg"
                  alt="Illustration of a creative studio dashboard"
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="space-y-3">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                      <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge className="mb-3 bg-slate-100 text-slate-700">Swipe left to browse</Badge>
              <h2 className="text-3xl font-semibold text-slate-900">Featured experiences for every kind of project</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Swipe through the latest booking opportunities and discover how Clip Crew helps both customers and creators succeed.
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/login" className="text-sm font-semibold text-blue-600">
                Continue to login
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <Carousel className="w-full">
              <CarouselContent>
                {offers.map((offer) => (
                  <CarouselItem key={offer.title} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-slate-200">
                      <CardContent className="p-0">
                        <div className="overflow-hidden rounded-t-2xl bg-slate-100">
                          <img
                            src={offer.title.includes("Browse") ? "/customer-journey.svg" : offer.title.includes("Showcase") ? "/brand-story.svg" : "/creative-studio.svg"}
                            alt={offer.title}
                            className="h-44 w-full object-cover"
                          />
                        </div>
                        <div className="p-5">
                          <Badge variant="secondary" className="mb-3">
                            {offer.badge}
                          </Badge>
                          <CardTitle className="text-xl">{offer.title}</CardTitle>
                          <CardDescription className="mt-3 text-sm leading-6">
                            {offer.description}
                          </CardDescription>
                          <Button asChild className="mt-5">
                            <Link to={offer.path}>
                              {offer.action}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-[46%]" />
              <CarouselNext className="right-2 top-[46%]" />
            </Carousel>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-slate-200 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">How it works</CardTitle>
              <CardDescription className="text-slate-200">
                A simple journey from discovery to delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-100">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>What customers and creators love</CardTitle>
              <CardDescription>
                Designed to reduce friction and keep each project moving forward.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" />
                  <p className="mt-3 font-semibold text-slate-900">Clear communication</p>
                  <p className="mt-1 text-sm text-slate-600">Built-in messaging keeps expectations aligned and reduces back-and-forth.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <Sparkles className="h-5 w-5 text-slate-900" />
                  <p className="mt-3 font-semibold text-slate-900">Professional presentation</p>
                  <p className="mt-1 text-sm text-slate-600">Showcase services, portfolios, and availability with clean, brand-ready pages.</p>
                </div>
              </div>

              <div className="rounded-[24px] bg-gradient-to-r from-blue-600 to-slate-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-100">Ready to launch</p>
                <h3 className="mt-3 text-2xl font-semibold">Move from first connection to booked project in just a few steps.</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button variant="secondary" asChild>
                    <Link to="/categories">Start as customer</Link>
                  </Button>
                  <Button className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/register">Start as creator</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}