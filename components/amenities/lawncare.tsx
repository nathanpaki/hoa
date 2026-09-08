import Image from "next/image";
import Link from "next/link";

import lawnIcon from "@/assets/images/brownicons/lawncare.png";

export default function Lawncare() {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Image
            src={lawnIcon}
            alt="Lawncare"
            width={100}
            height={100}
            className="h-20 w-auto object-contain sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-normal text-gray-700 sm:text-2xl">
          Lawncare
        </h2>

        {/* Content */}
        <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              The Association contracts with a lawn care service to maintain the
              common areas and lawns. Mowing is usually done on Thursdays,
              weather permitting.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              A sign will be placed at the entrance weekly indicating the day
              the lawns will be mowed.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              For further information regarding lawn care, refer to the Exterior{" "}
              <Link
                href="/maintenance"
                className="mx-1 text-amber-700 underline-offset-4 hover:underline"
              >
                Maintenance
              </Link>{" "}
              section of the website.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
            <span className="min-w-0">
              Questions should be referred to the Grounds Committee.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
