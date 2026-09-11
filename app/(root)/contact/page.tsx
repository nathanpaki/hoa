"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { fullHoaName, streetName, cityState } from "@/lib/constants";
import {
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "420e7f39-2a85-4f1b-a06c-7ad67d430229");

    formData.append(
      "subject",
      `Deerfield HOA Contact Form: ${
        formData.get("subject") || "General Inquiry"
      }`,
    );

    formData.append("from_name", "Deerfield HOA Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {fullHoaName}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact the HOA
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Have a question, need assistance, or want to get in touch with the
              Deerfield Home Owners Association? Send us a message and
              we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {/* Contact Form */}
          <Card className="overflow-hidden lg:col-span-2">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 shadow-sm">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>

                <div>
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Send Us a Message
                  </CardTitle>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Complete the form below and your message will be sent to the
                    HOA.
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-primary p-4">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold">Message Sent</h2>

                  <p className="mt-2 max-w-md text-muted-foreground">
                    Thank you for contacting the Deerfield HOA. Your message has
                    been received and someone will get back to you.
                  </p>

                  <Button className="mt-6" onClick={() => setStatus("idle")}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot spam protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>

                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>

                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>

                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message..."
                      className="min-h-40 resize-y"
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      Something went wrong while sending your message. Please
                      try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary p-3 shadow-sm">
                    <Home className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Deerfield HOA
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <h3 className="font-semibold">Mailing Address</h3>

                    <address className="mt-2 not-italic leading-6 text-muted-foreground">
                      {streetName}
                      <br />
                      {cityState}
                    </address>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <h3 className="font-semibold">Questions & Requests</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Use the contact form to send questions or requests to the
                      Deerfield Home Owners Association.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Helpful Links */}
            <Card>
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="text-xl">Helpful Information</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  You may find the information you need on one of the following
                  pages.
                </p>

                <div className="mt-5 space-y-3">
                  <Link
                    href="/fees"
                    className="inline-flex h-9 w-full items-center justify-start rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    HOA Fees & Pool Information
                  </Link>

                  <Link
                    href="/maintenance"
                    className="inline-flex h-9 w-full items-center justify-start rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Maintenance Information
                  </Link>

                  <Link
                    href="/amenities"
                    className="inline-flex h-9 w-full items-center justify-start rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Community Amenities
                  </Link>

                  <Link
                    href="/covenant-plat"
                    className="inline-flex h-9 w-full items-center justify-start rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Covenants & By-Laws
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
