import Image from "next/image";

import poolIcon from "@/assets/images/brownicons/pool.png";

export default function Pool() {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Image
            src={poolIcon}
            alt="Swimming Pool"
            width={100}
            height={100}
            className="h-20 w-auto object-contain sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-normal text-gray-700 sm:text-2xl">
          Swimming Pool
        </h2>

        {/* Content */}
        <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              <strong>Pool</strong> – Deerfield Pool is available May 1 –
              September 30, and the hours are 8:00 a.m. to 10:00 p.m.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              A resident must accompany guests at all times. Pool rules are
              posted, and failure to comply with rules can result in
              cancellation of a pool card.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Compliance with pool rules is for the safety of all users. No
              animals are allowed in the pool – this is a health department
              violation.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
