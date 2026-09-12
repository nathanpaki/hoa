import Resources from "@/components/resources/Resources";
import { fullHoaName } from "@/lib/constants";
export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {" "}
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {fullHoaName}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Community Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Helpful information and community resources available to Deerfield
              residents.
            </p>
          </div>
        </div>
      </section>
      {/* Resources */} <Resources />
    </main>
  );
}
// import Resources from "@/components/resources/Resources";
// import React from "react";

// export default function Page() {
//   return (
//     <div className="space-y-10">
//       {/* Page Header */}
//       <section className="pt-10">
//         <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
//           <h1 className="text-center text-2xl font-bold tracking-tight text-gray-700 sm:text-2xl">
//             Deerfield Community Amenities
//           </h1>

//           <p className="mx-auto mt-4 w-full max-w-3xl text-center text-base leading-7 text-gray-600 sm:text-lg">
//             Deerfield offers a comfortable and convenient condominium lifestyle,
//             designed for those seeking a balance of tranquility and
//             accessibility. This established subdivision provides residents with
//             well-maintained properties and a sense of community. With a focus on
//             ease of living, Deerfield presents an ideal setting for individuals
//             and families looking for a low-maintenance home environment.
//           </p>
//         </div>
//       </section>

//       {/* Resources */}
//       <Resources />
//     </div>
//   );
// }
