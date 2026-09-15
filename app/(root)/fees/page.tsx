import { CreditCard, ShieldCheck, Waves } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { fullHoaName } from "@/lib/constants";

import {
  getManagement,
  getPoolLiaison,
  getFee,
} from "@/lib/actions/getHoaData";

export default async function FeesPage() {
  const [management, poolLiaison, maintenanceFee, lateFee, poolFee] =
    await Promise.all([
      getManagement(),
      getPoolLiaison(),
      getFee("Maintenance Fee"),
      getFee("Late Fee"),
      getFee("Pool Fee"),
    ]);

  // Format fees from Decimal values returned by Prisma
  const maintenanceFeeAmount = maintenanceFee
    ? Number(maintenanceFee.amount).toFixed(2)
    : "0.00";

  const lateFeeAmount = lateFee ? Number(lateFee.amount).toFixed(2) : "0.00";

  const poolFeeAmount = poolFee ? Number(poolFee.amount).toFixed(2) : "0.00";

  // Management company
  const managementName = management?.name ?? "HOA Management Company";

  // Management phone
  const managementPhone = management?.phone ?? "";

  const managementPhoneLink = managementPhone
    ? managementPhone.replace(/\D/g, "")
    : "";

  // Pool liaison
  const poolLiaisonName = poolLiaison?.name ?? "the Pool Liaison";

  const poolLiaisonPhone = poolLiaison?.phone ?? "";
  const poolLiaisonEmail = poolLiaison?.email ?? "";

  const poolLiaisonPhoneLink = poolLiaisonPhone
    ? poolLiaisonPhone.replace(/\D/g, "")
    : "";

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {fullHoaName}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fees &amp; Insurance
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
            {/* Maintenance Fees */}
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader className="border-b bg-background">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary p-3">
                    <CreditCard className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Maintenance Fees
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6 text-base leading-7 text-muted-foreground sm:p-8">
                <p>
                  Current maintenance fees are
                  <strong className="ml-1 text-foreground">
                    ${maintenanceFeeAmount}
                  </strong>
                  , due by the
                  <strong className="text-foreground ml-1">
                    5th of each month
                  </strong>
                  , payable to {managementName}, the HOA&apos;s management
                  company.
                </p>

                <p>
                  {managementName} provides coupon books and envelopes for
                  mailing purposes. If coupons are not available, payment may be
                  mailed to:
                </p>

                {management && (
                  <address className="not-italic rounded-lg border bg-muted/30 p-4 text-foreground">
                    <strong>{management.name}</strong>

                    {management.street && (
                      <>
                        <br />
                        {management.street}
                      </>
                    )}

                    {(management.city ||
                      management.state ||
                      management.zip) && (
                      <>
                        <br />

                        {management.city && management.city}

                        {management.city && management.state && ", "}

                        {management.state && management.state}

                        {management.zip && ` ${management.zip}`}
                      </>
                    )}
                  </address>
                )}

                {managementPhone && (
                  <p>
                    Arrangements to pay by credit card or by bank draft may be
                    made by calling {managementName} at
                    <a
                      href={`tel:${managementPhoneLink}`}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {managementPhone}
                    </a>
                    .
                  </p>
                )}

                <p>
                  A
                  <strong className="text-foreground mx-1">
                    ${lateFeeAmount} late fee
                  </strong>
                  will apply in the event of failure to pay monthly maintenance
                  fees promptly.
                </p>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
              <CardHeader className="border-b bg-background">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary p-3">
                    <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Insurance
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6 text-base leading-7 text-muted-foreground sm:p-8">
                <p>
                  Deerfield Subdivision is a
                  <strong className="text-foreground ml-1">
                    PUD (Planned Unit Development)
                  </strong>
                  , and each homeowner has legal title to the unit and property
                  on which the unit is built.
                </p>

                <p>
                  In order to be adequately covered, each homeowner must
                  maintain full homeowners insurance coverage.
                </p>

                <p>
                  Having evidence of homeowners insurance coverage on file with
                  the HOA Board is helpful in assuring that all residents are
                  properly insured.
                </p>
              </CardContent>
            </Card>

            {/* Pool Fees */}
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md md:col-span-2">
              <CardHeader className="border-b bg-background">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary p-3">
                    <Waves className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Pool Fees
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-6 text-base leading-7 text-muted-foreground sm:p-8">
                <p>
                  <strong className="text-foreground">Pool Access Cards</strong>
                  – Residents must be up to date on their HOA dues to be
                  eligible for a pool access card.
                </p>

                <p>
                  Each pool card is
                  <strong className="ml-1 text-foreground">
                    ${poolFeeAmount}
                  </strong>
                  , and only one card is issued per household.
                </p>

                {poolLiaison && (
                  <p>
                    To receive a pool card, please contact
                    <strong className="text-foreground mr-1">
                      {poolLiaisonName}
                    </strong>
                    {poolLiaisonPhone && (
                      <>
                        at
                        <a
                          href={`tel:${poolLiaisonPhoneLink}`}
                          className="font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {poolLiaisonPhone}
                        </a>
                      </>
                    )}
                    {poolLiaisonEmail && (
                      <>
                        at
                        <a
                          href={`mailto:${poolLiaisonEmail}`}
                          className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {poolLiaisonEmail}
                        </a>
                      </>
                    )}
                    .
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
