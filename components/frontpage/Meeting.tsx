import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Meeting() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-muted/40">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary p-3">
              <CalendarDays className="h-5 w-5 text-primary-foreground" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Monthly Meeting
              </p>

              <CardTitle className="mt-1 text-2xl">
                Join Us at the HOA Meeting
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 sm:p-8">
          <p className="text-lg font-medium leading-7">
            Monthly HOA meetings are held on the second Thursday of every month
            at 5:30 P.M. at Park West Church.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Want to stay informed about what&apos;s happening in our community?
            Have ideas or concerns you&apos;d like to share? Whether you&apos;re
            new to the neighborhood or a long-time resident, everyone is welcome
            to attend our monthly HOA meetings.
          </p>
          <div className="mt-6 rounded-lg border bg-muted/30 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Meeting Location
            </p>
            <address className="mt-2 not-italic leading-7 text-muted-foreground">
              <span className="font-medium text-foreground">
                Park West Church
              </span>
              <br /> 7635 Middlebrook Pike <br /> Knoxville, TN 37909
            </address>
          </div>

          {/* <Button className="mt-6" size="lg">
            Meeting Information
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </CardContent>
      </Card>
    </section>
  );
}
