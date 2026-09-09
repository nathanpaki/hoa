import {
  Building2,
  Bus,
  Car,
  Home,
  MapPin,
  ShieldCheck,
  Trees,
  Users,
  Waves,
} from "lucide-react";

import { fullHoaName } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const communityFeatures = [
  {
    title: "129 Homes",
    description:
      "Deerfield is a well-maintained neighborhood of 129 homes in a Planned Unit Development within the Knoxville city limits.",
    icon: Home,
  },
  {
    title: "Comfortable Homes",
    description:
      "Homes are two- or three-bedroom units ranging from approximately 1,080 to 1,900 square feet.",
    icon: Building2,
  },
  {
    title: "Outdoor Living",
    description:
      "Each residence has a front lawn and porch, along with a backyard lawn and deck or patio. Some backyards are open while others are fenced.",
    icon: Trees,
  },
  {
    title: "Community Pool",
    description:
      "Residents enjoy access to an outdoor swimming pool and a covered picnic pavilion.",
    icon: Waves,
  },
  {
    title: "A Community for All Ages",
    description:
      "Deerfield residents range from young first-time homeowners to retirees, creating a diverse and welcoming community.",
    icon: Users,
  },
  {
    title: "Convenient Location",
    description:
      "Located in West Knoxville, Deerfield is close to West Town Mall, Downtown West, Cedar Bluff, Turkey Creek, and major highways.",
    icon: MapPin,
  },
];

export default function AboutPage() {
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
              About Deerfield
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              A comfortable and convenient condominium community in West
              Knoxville, offering residents a balance of tranquility,
              accessibility, and community.
            </p>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-background">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 shadow-sm">
                  <Home className="h-6 w-6 text-primary-foreground" />
                </div>

                <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Deerfield Community
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <div className="mx-auto max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  Deerfield is a well-maintained neighborhood of 129 homes in a
                  Planned Unit Development (PUD) within the city limits of
                  Knoxville, Tennessee.
                </p>

                <p>
                  Homeowners own their entire structure and the ground on which
                  it is situated. The homes are either two- or three-bedroom
                  units, varying in size from approximately 1,080 square feet to
                  1,900 square feet.
                </p>

                <p>
                  Each residence has a front lawn and porch, as well as a
                  backyard lawn and deck or patio. Some backyards are open,
                  while others are fenced. Most homes have a garage, with either
                  a one- or two-vehicle enclosure.
                </p>

                <p>
                  Deerfield offers an outdoor swimming pool and a covered picnic
                  pavilion for residents to enjoy.
                </p>

                <p>
                  Residents range in age from young first-time buyers to
                  retirees, creating a diverse community of homeowners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Community Features */}
      <section className="border-y bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Life at Deerfield
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              A Comfortable Place to Call Home
            </h2>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Deerfield combines comfortable homes, shared amenities, and a
              convenient West Knoxville location.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="h-full transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-primary p-3 shadow-sm">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* HOA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-background">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                </div>

                <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A Community Governed by Homeowners
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <div className="mx-auto max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  Deerfield is deed-restricted and governed by a nine-member
                  Board of Directors that meets monthly.
                </p>

                <p>
                  The Board works diligently to attain and maintain a
                  financially sound community for the benefit of all residents.
                  The association's governing documents help protect the
                  appearance, value, and quality of life of the neighborhood.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Location */}
      <section className="border-y bg-muted/30 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardHeader className="border-b bg-background">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 shadow-sm">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>

                <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Conveniently Located in West Knoxville
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <div className="mx-auto max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  Deerfield is located at the intersection of Middlebrook Pike
                  and Robinson Road in West Knoxville.
                </p>

                <p>
                  The community is conveniently located near West Town Mall,
                  Downtown West, Cedar Bluff, and Turkey Creek. I-40 and I-75
                  are approximately a five-minute drive away.
                </p>

                <div className="grid gap-4 pt-2 sm:grid-cols-2">
                  <div className="rounded-lg border bg-background p-4">
                    <div className="flex items-center gap-3">
                      <Car className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">
                        I-40 & I-75
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Approximately a five-minute drive
                    </p>
                  </div>

                  <div className="rounded-lg border bg-background p-4">
                    <div className="flex items-center gap-3">
                      <Bus className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">
                        Public Transportation
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Downtown bus stop approximately a 15-minute walk away
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Rental Restriction */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-primary/30">
            <CardHeader className="border-b bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                </div>

                <CardTitle className="text-2xl font-semibold tracking-tight">
                  Rental Restrictions
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
                Condominiums in Deerfield cannot be purchased for the purpose of
                renting. If a condominium is currently being used as a rental
                property, it may continue to be rented while under its current
                ownership; however, when the property is sold, it cannot be used
                for new rentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
