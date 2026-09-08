import { ParkingCircle, PawPrint, Trees, Waves } from "lucide-react";
import AmenitySection from "@/components/amenities/amenitySection";
import { getAmenities } from "@/lib/acttions/getAmenities";
const amenityIcons = {
  Parking: ParkingCircle,
  Pets: PawPrint,
  Lawncare: Trees,
  "Swimming Pool": Waves,
} as const;
export default async function Page() {
  const amenities = await getAmenities();
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
              Deerfield Community Amenities
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Deerfield offers a comfortable and convenient condominium
              lifestyle, designed for those seeking a balance of tranquility and
              accessibility. This established subdivision provides residents
              with well-maintained properties and a sense of community. With a
              focus on ease of living, Deerfield presents an ideal setting for
              individuals and families looking for a low-maintenance home
              environment.
            </p>
          </div>
        </div>
      </section>
      {/* Amenities */}
      <section className="bg-background">
        <div className=" grid gap-5 md:grid-cols-2 ">
          {amenities.map((amenity) => {
            const Icon =
              amenityIcons[amenity.title as keyof typeof amenityIcons] ?? Trees;
            return (
              <AmenitySection
                key={amenity.title}
                title={amenity.title}
                icon={Icon}
                items={amenity.items}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

// export default function page() {
//   return (
//     <div className="space-y-10">
//       <div className="w-full items-center text-gray-800 pt-10">
//         <h1 className="text-2xl flex justify-center text-gray-700 font-bold tracking-tight sm:text-xl md:text-2xl text-center">
//           Deerfield Community Amneties
//         </h1>

//         <p className="mt-4 w-full sm:w-3/4 mx-auto px-4 sm:px-0 text-lg text-gray-600 sm:text-xl">
//           Deerfield offers a comfortable and convenient condominium lifestyle,
//           designed for those seeking a balance of tranquility and accessibility.
//           This established subdivision provides residents with well-maintained
//           properties and a sense of community. With a focus on ease of living,
//           Deerfield presents an ideal setting for individuals and families
//           looking for a low-maintenance home environment.
//         </p>
//       </div>
//       <Pool />
//       <Parking />
//       <Pets />
//       <Lawncare />
//     </div>
//   );
// }
