import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroimage from "@/assets/images/hero.svg";
export default function Hero() {
  // Adjust this value to change the image transparency/darkness.
  // 0 = completely transparent
  // 1 = completely visible
  const imageOpacity = 0.45;

  return (
    <section className="relative h-150 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroimage}
        alt="Hero image"
        fill
        priority
        className="object-cover"
        style={{ opacity: imageOpacity }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Optional gradient from bottom */}
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" /> */}

      {/* Bottom-left content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-6 sm:p-10 md:p-14">
        <div className="max-w-2xl text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest">
            Welcome
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your Main Heading
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
            A short second line describing your organization, event, service, or
            website.
          </p>

          <Button className="mt-6" size="lg">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
