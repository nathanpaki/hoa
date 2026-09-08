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

          <Button className="mt-6" size="lg">
            Meeting Information
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

// import { ArrowRight } from "lucide-react";
// import React from "react";
// import { Button } from "../ui/button";

// export default function Meeting() {
//   return (
//     <div className="grid  w-full items-center text-gray-800 pt-10 bg-gray-200">
//       <p className="mb-2 text-sm font-medium uppercase tracking-widest px-4">
//         Monthyly Meeting
//       </p>

//       <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600 px-4">
//         Join Us for the Monthly HOA Meetings on 2nd Thursday of every month at
//         5:30 P.M at Park West Church.
//       </h1>

//       <p className="mt-4 max-w-full text-md sm:text-md text-gray-600 px-4 ">
//         Want to stay informed about what's happening in our community? Have
//         ideas or concerns you'd like to share? Whether you're new to the
//         neighborhood or a long-time resident, everyone is welcome to attend our
//         monthly HOA meetings on 2nd Thursday of the month.
//       </p>

//       <div className="p-4">
//         <Button className="mt-2 size=lg">
//           Learn More
//           <ArrowRight className="ml-2 h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }
