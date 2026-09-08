// import parking from "@/components/amenities/parking";
// import pets from "@/components/amenities/pets";
// import pool from "@/components/amenities/pool";
// import React from "react";
// import lawncare from "@/components/amenities/lawncare";
import pets from "@/assets/images/brownicons/dog.png";
import pool from "@/assets/images/brownicons/pool.png";
import parking from "@/assets/images/brownicons/parking.jpg";
import lawncare from "@/assets/images/brownicons/lawncare.png";

import AmenitySection from "@/components/amenities/amenitySection";
import { getAmenities } from "@/lib/acttions/getAmenities";
import { posix } from "node:path";
//AMNETIES

export default async function Page() {
  const amenities = await getAmenities();
  return (
    <main>
      {/* Page Header */}
      <section className="pt-10 pb-4">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-700">
            Deerfield Community Amenities
          </h1>

          <p className="mx-auto mt-4 w-full max-w-3xl text-center text-base leading-7 text-gray-600 sm:text-lg">
            Deerfield offers a comfortable and convenient condominium lifestyle,
            designed for those seeking a balance of tranquility and
            accessibility. This established subdivision provides residents with
            well-maintained properties and a sense of community. With a focus on
            ease of living, Deerfield presents an ideal setting for individuals
            and families looking for a low-maintenance home environment.
          </p>
        </div>
      </section>
      Amenities
      <div className="space-y-4">
        <AmenitySection
          title="Swimming Pool"
          icon={pool}
          items={[
            <>
              <strong>Pool</strong> – Deerfield Pool is available May 1 –
              September 30, and the hours are 8:00 a.m. to 10:00 P.M.
            </>,
            <>
              A resident must accompany guests at all times. Pool rules are
              posted, and failure to comply with rules can result in
              cancellation of a pool card.
            </>,
            <>
              Compliance with pool rules is for the safety of all users. No
              animals are allowed in the pool – this is a health department
              violation.
            </>,
          ]}
        />

        {amenities.map((amenity) => (
          <AmenitySection
            key={amenity.title}
            title={amenity.title}
            icon={pool}
            items={amenity.items}
          />
        ))}

        {/* 
        <AmenitySection
          title="Parking"
          icon={parking}
          items={[
            <>
              <strong>PARKING ON THE STREET OVERNIGHT IS PROHIBITED.</strong>
            </>,
            <>
              Each condominium unit is assigned parking spaces for residents and
              guests.
            </>,
            <>Vehicles must be parked only in designated parking spaces.</>,
            <>
              Parking areas are not to be used for storage of vehicles or other
              items.
            </>,
            <>
              Please ensure that all vehicles are properly registered and
              operational.
            </>,
          ]}
        />

        <AmenitySection
          title="Pets"
          icon={pets}
          items={[
            <>
              Pets are welcome at Deerfield, subject to the community's rules
              and regulations.
            </>,
            <>
              Pets must be kept under control and should not create a nuisance
              for other residents.
            </>,
            <>Residents are responsible for cleaning up after their pets.</>,
          ]}
        />

        <AmenitySection
          title="Lawncare"
          icon={lawncare}
          items={[
            <>
              Lawncare is provided as part of the community's maintenance
              services.
            </>,
            <>
              Residents are responsible for maintaining items and landscaping
              located within their individual areas as required.
            </>,
            <>
              Please see the Deerfield{" "}
              <a
                href="/maintenance"
                className="text-amber-700 underline-offset-4 hover:underline"
              >
                Maintenance
              </a>{" "}
              information for additional details.
            </>,
          ]}
        /> */}
      </div>
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
