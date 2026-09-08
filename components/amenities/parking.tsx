import Image from "next/image";

import parkingIcon from "@/assets/images/brownicons/brownparking.png";

export default function Parking() {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Image
            src={parkingIcon}
            alt="Parking"
            width={100}
            height={100}
            className="h-20 w-auto object-contain sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-normal text-gray-700 sm:text-2xl">
          Parking
        </h2>

        {/* Content */}
        <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Parking on the street is permissible only for temporary,
              infrequent periods and must not restrict traffic or block
              mailboxes or neighbors&apos; driveways.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0 font-semibold">
              PARKING ON THE STREET OVERNIGHT IS PROHIBITED.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              There is space at the Pepperdine cul-de-sac and the pool parking
              lot for overnight parking and for parking of guest vehicles. These
              parking spaces are within walking distance of all of Deerfield.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              These spaces are not to be used for storage of vehicles.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Violation of these rules is a basis for vehicles being towed.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
