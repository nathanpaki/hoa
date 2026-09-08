import Resources from "@/components/resources/Resources";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <section className="pt-10">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-700 sm:text-2xl">
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

      {/* Resources */}
      <Resources />
    </div>
  );
}
