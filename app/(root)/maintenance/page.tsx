import {
  Home,
  Trees,
  Droplets,
  Lightbulb,
  Waves,
  Warehouse,
  Construction,
  Route,
  Bug,
  FileText,
  Palette,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const responsibilities = [
  {
    title: "Exterior Siding and Brick",
    icon: Home,
    description:
      "The Association is responsible for repair or replacement of exterior siding and brick caused by normal aging only. All repairs and replacement shall match the original color and material as described in the Materials Appendix.",
  },
  {
    title: "Exterior Wood Surfaces",
    icon: Construction,
    description:
      "The Association is responsible for repairing wood rot damage to exterior wood surfaces.",
  },
  {
    title: "Gutters & Downspouts",
    icon: Droplets,
    description:
      "The Association is responsible for the repair and/or replacement of gutters and downspouts due to normal aging only.",
  },
  {
    title: "Lawns",
    icon: Trees,
    description:
      "The Association is responsible for mowing and trimming grass; fertilizing; aerating and seeding lawns; pruning original boxwoods and hollies; and removing grass clippings and pruning debris from each unit and the common areas. Lawn care is performed weekly during the warm season. A sign is posted weekly at the entrance advising the day lawn care will be performed.",
  },
  {
    title: "Lighting",
    icon: Lightbulb,
    description:
      "The Association is responsible for providing and maintaining street lights.",
  },
  {
    title: "Pool",
    icon: Waves,
    description: "The Association is responsible for maintaining the pool.",
  },
  {
    title: "Roofs",
    icon: Warehouse,
    description:
      "The Association is responsible for repair and replacement of roofs only when required due to normal aging. The Association is not responsible for repair or replacement caused by builder or subcontractor error, negligence, or damage by the Homeowner. Damage caused by fire, wind, hail, or other natural causes is the responsibility of the Homeowner and/or Homeowner's insurance carrier. All roof repairs and replacements shall use the shingles described in the Materials Appendix.",
  },
  {
    title: "Sidewalks & Driveways",
    icon: Construction,
    description:
      "The Association is responsible for repair of sidewalks and driveways when caused by normal aging only. Any repairs and replacement shall duplicate the original driveway or sidewalk.",
  },
  {
    title: "Streets",
    icon: Route,
    description:
      "Deerfield streets are privately owned and are part of the Common Area. The Association is responsible for maintaining the streets.",
  },
  {
    title: "Termite Control",
    icon: Bug,
    description:
      "The Association has entered into a contract to provide termite control for all of Deerfield at no cost to Homeowners. The service includes installation and maintenance of Sentricon bait stations at each unit.",
  },
];

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Deerfield Home Owners Association
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Maintenance
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Information about exterior maintenance responsibilities, repairs,
              and services provided by the Deerfield Home Owners Association.
            </p>
          </div>
        </div>
      </section>

      {/* Covenant */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/40">
            <CardTitle className="text-2xl">Exterior Maintenance</CardTitle>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <p className="mb-6 leading-7 text-muted-foreground">
              The Third Amendment to Declaration of Covenants, Conditions and
              Restrictions for Deerfield Subdivision, a Planned Unit
              Development, Article 7 – Exterior Maintenance provides:
            </p>

            <blockquote className="border-l-4 border-primary bg-muted/30 px-5 py-5 text-base leading-7 text-foreground">
              <p>
                “The Association shall maintain the Common Areas, including the
                structures which may exist or hereafter be constructed within
                the Common Areas shown on the recorded plat or plats, and the
                Non-Exclusive Joint Permanent Easement.
              </p>

              <p className="mt-4">
                The Association shall provide exterior maintenance upon each Lot
                which is subject to assessment hereunder, as follows: lawn
                mowing; paint, repair, replacement and care of roofs, gutters,
                downspouts, exterior building surfaces, and sidewalks.
              </p>

              <p className="mt-4">
                Such exterior maintenance shall not include glass surfaces.
              </p>

              <p className="mt-4">
                In the event that the need for maintenance or repair of a Lot or
                the improvements thereon is caused through the willful or
                negligent acts of its Owner(s), or through the willful or
                negligent acts of the family, guests or invitees of the Owner(s)
                of the Lot needing such maintenance or repair, the costs of such
                exterior maintenance shall be added to and become a part of the
                assessment to which such Lot is subject, and shall be collected
                in accordance with terms of this Declaration.”
              </p>
            </blockquote>
          </CardContent>
        </Card>
      </section>

      {/* Reference Documents */}
      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary p-3">
                <FileText className="h-6 w-6  text-primary-foreground" />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold">Materials Appendix</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Specifications for repairs and replacements.
                </p>
              </div>

              <Button variant="outline">
                <a href="/documents/materials-appendix.pdf" target="_blank">
                  View
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary p-3">
                <Palette className="h-6 w-6   text-primary-foreground" />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold">Paint Colors</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Approved exterior paint colors.
                </p>
              </div>

              <Button variant="outline">
                <a href="/documents/paint-colors.pdf" target="_blank">
                  View
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What the HOA Maintains
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Association Responsibilities
            </h2>

            <p className="mt-4 text-muted-foreground">
              The following responsibilities further clarify the Association's
              exterior maintenance obligations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {responsibilities.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="h-full transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary p-3">
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

      {/* Bottom note */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Questions About Maintenance?</h2>

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          If you have questions about whether a repair or maintenance item is
          the responsibility of the Association or the homeowner, please refer
          to the governing documents and Materials Appendix.
        </p>
      </section>
    </main>
  );
}
