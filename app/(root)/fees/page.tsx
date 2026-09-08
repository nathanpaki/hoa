import { CreditCard, ShieldCheck, Waves } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Maintenance Fees",
    icon: CreditCard,
    content: (
      <>
        <p>
          Current maintenance fees are
          <strong className="text-foreground ml-1">$108.00</strong>, due by the{" "}
          <strong className="text-foreground">5th of each month</strong>,
          payable to Paragon Management Group, the HOA&apos;s management
          company.
        </p>

        <p>
          Paragon provides coupon books and envelopes for mailing purposes. If
          coupons are not available, payment may be mailed to:
        </p>

        <address className="not-italic rounded-lg border bg-muted/30 p-4 text-foreground">
          <strong>Paragon Management Group, Inc.</strong>
          <br />
          845 Bell Road, Suite 210
          <br />
          Antioch, Tennessee 37013
        </address>

        <p>
          Arrangements to pay by credit card or by bank draft may be made by
          calling Paragon at{" "}
          <a
            href="tel:6157314767"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            615-731-4767
          </a>
          .
        </p>

        <p>
          A <strong className="text-foreground">$10 late fee</strong> will apply
          in the event of failure to pay monthly maintenance fees promptly.
        </p>
      </>
    ),
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Deerfield Subdivision is a{" "}
          <strong className="text-foreground">
            PUD (Planned Unit Development)
          </strong>
          , and each homeowner has legal title to the unit and property on which
          the unit is built.
        </p>

        <p>
          In order to be adequately covered, each homeowner must maintain full
          homeowners insurance coverage.
        </p>

        <p>
          Having evidence of homeowners insurance coverage on file with the HOA
          Board is helpful in assuring that all residents are properly insured.
        </p>
      </>
    ),
  },
  {
    title: "Pool Fees",
    icon: Waves,
    content: (
      <>
        <p>
          <strong className="text-foreground">Pool Access Cards</strong> –
          Residents must be up to date on their HOA dues to be eligible for a
          pool access card.
        </p>

        <p>
          Each pool card is <strong className="text-foreground">$5.00</strong>,
          and only one card is issued per household.
        </p>

        <p>
          To receive a pool card, please contact John at{" "}
          <a
            href="mailto:zuluzulutoby@gmail.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            zuluzulutoby@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function FeesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Deerfield Home Owners Association
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fees & Insurance
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Information about Deerfield maintenance fees, homeowners insurance
              requirements, and pool access cards.
            </p>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Card
                  key={section.title}
                  className="h-full overflow-hidden transition-shadow hover:shadow-md"
                >
                  <CardHeader className="border-b bg-background">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary p-3">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      <CardTitle className="text-2xl font-semibold tracking-tight">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5 p-6 text-base leading-7 text-muted-foreground sm:p-8">
                    {section.content}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
