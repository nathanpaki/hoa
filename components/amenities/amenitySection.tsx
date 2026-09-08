import Image, { StaticImageData } from "next/image";

type AmenitySectionProps = {
  title: string;
  icon: StaticImageData;
  items: React.ReactNode[];
};

export default function AmenitySection({
  title,
  icon,
  items,
}: AmenitySectionProps) {
  return (
    <section className="w-full py-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className="h-20 w-auto object-contain sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-normal text-gray-700">
          {title}
        </h2>

        {/* Content */}
        <ul className="mx-auto max-w-3xl space-y-4 text-base leading-7 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
