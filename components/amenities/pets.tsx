import Image from "next/image";

import dogIcon from "@/assets/images/brownicons/dog.png";

export default function Pets() {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Image
            src={dogIcon}
            alt="Pets"
            width={100}
            height={100}
            className="h-20 w-auto object-contain sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-normal text-gray-700 sm:text-2xl">
          Pets
        </h2>

        {/* Content */}
        <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Deerfield is a pet-friendly neighborhood. Dogs and cats are
              welcome so long as their presence does not infringe on the rights
              and comfort of others in the neighborhood. Pets must always be on
              a leash when off the property of the resident, and feces must
              always be picked up and properly disposed of.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Neighbors must not be disturbed by excessive barking.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Failure to abide by these rules is a violation of Knoxville City
              codes.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              These spaces are not to be used for storage of vehicles.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
