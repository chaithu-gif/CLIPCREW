import { useState } from "react";
import { ArrowRight, Camera, Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@clipcrew.com",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+1 (800) 555-0148",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "BMS UNIVERSITY ,Basavanagudi ,Bangalore-560019 ",
  },
  {
    icon: Clock3,
    label: "Support hours",
    value: "Mon–Fri · 9 AM to 6 PM",
  },
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="font-semibold text-blue-600">Contact</Link>
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
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let’s build your next creative project together.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Need help choosing the right creator, planning your booking, or just want a faster way to get started? Reach out and our team will respond quickly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.label} className="border-slate-200">
                    <CardContent className="flex gap-3 p-4">
                      <div className="rounded-full bg-blue-50 p-2 text-blue-700">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.label}</p>
                        <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Share a few details and we’ll help you move from idea to booking faster.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="name@company.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="company">Company</label>
                  <Input id="company" placeholder="Company or team name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your project, timeline, and what kind of creative support you need."
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">
                    We typically reply within one business day.
                  </p>
                  <Button type="submit">
                    Send inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Thanks! Your message is ready to send. Our team will follow up shortly.
                  </div>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
