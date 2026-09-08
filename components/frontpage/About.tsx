import { Button } from "@base-ui/react";
import { ArrowRight } from "lucide-react";
import heroimage from "@/assets/images/hero.svg";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid  w-full grid-cols-1 gap-8 md:grid-cols-2 items-center text-black pt-10 ">
      {/*Left Picture  */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image src={heroimage} alt={"aboutimage"} fill priority />
      </div>

      {/* Right - Text */}
      <div className="text-black">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest">
          About Us
        </p>

        <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600">
          Heading
        </h1>

        <p className="mt-4 max-w-xl text-md sm:text-md text-gray-600">
          Deerfield is a well-maintained neighborhood of 129 homes in a PUD
          inside the city limits of Knoxville, Tennessee. Homeowners own their
          entire structure and the ground on which it is situated. The homes are
          either two- or three-bedroom units varying in size from approximately
          1080 square feet to 1900 square feet.
        </p>

        <div>
          <Button className="mt-2 size=lg">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
