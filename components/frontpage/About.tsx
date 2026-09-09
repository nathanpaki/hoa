import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import entranceImage from "@/assets/images/condo/entrance.png";
import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-70 md:min-h-full">
            <Image
              src={entranceImage}
              alt="Deerfield neighborhood"
              fill
              className="object-cover ml-2"
            />
          </div>

          {/* Content */}
          <CardContent className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Welcome to Deerfield
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Deerfield is a well-maintained neighborhood of 129 homes in a
              Planned Unit Development inside the city limits of Knoxville,
              Tennessee.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Homeowners own their entire structure and the ground on which it
              is situated. The homes are either two- or three-bedroom units
              varying in size from approximately 1080 square feet to 1900 square
              feet.
            </p>

            <div>
              <Link
                href="/about"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />{" "}
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
