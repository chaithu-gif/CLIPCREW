import { ArrowRight, Camera, Globe2, ShieldCheck, Sparkles, Users } from "lucide-react";
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

const values = [
  {
    title: "Trusted collaboration",
    description:
      "We verify creator profiles and keep communication clear so customers can book with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Fast discovery",
    description:
      "Search categories, compare portfolios, and move from inspiration to booking in a few taps.",
    icon: Globe2,
  },
  {
    title: "Built for growth",
    description:
      "Creators get a professional workspace and customers get a seamless booking journey from first click to final delivery.",
    icon: Sparkles,
  },
];

const highlights = [
  "Dedicated tools for customers and creators",
  "Easy category-based browsing for every project type",
  "Clear onboarding, transparent booking flow, and responsive support",
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
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
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="font-semibold text-blue-600">About Us</Link>
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
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge className="mb-4">About Clip Crew</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              A premium marketplace for brands, businesses, and creative talent.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Clip Crew brings together customers who need high-quality creative services and creators who want a polished, efficient way to showcase and book their work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/categories">
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Talk to our team</Link>
              </Button>
            </div>
          </div>

          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle>What makes us different</CardTitle>
              <CardDescription>
                A streamlined experience for every stage of the creative booking journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                    <Users className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card key={value.title} className="border-slate-200">
                <CardHeader>
                  <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 p-2 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-6">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="mt-12 rounded-[32px] bg-slate-900 p-8 text-white sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Our promise</p>
              <h2 className="mt-3 text-3xl font-semibold">Professional service, delightful outcomes, and a booking process that feels effortless.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/register">Join as creator</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">Continue to login</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
