import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroimage from "@/assets/images/condo/entrance.png";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-70 md:min-h-full">
            <Image
              src={heroimage}
              alt="Deerfield neighborhood"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <CardContent className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Welcome to Deerfield
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Deerfield is a well-maintained neighborhood of 129 homes in a
              Planned Unit Development inside the city limits of Knoxville,
              Tennessee.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Homeowners own their entire structure and the ground on which it
              is situated. The homes are either two- or three-bedroom units
              varying in size from approximately 1080 square feet to 1900 square
              feet.
            </p>

            <div>
              <Button className="mt-6" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}

// import { Button } from "@base-ui/react";
// import { ArrowRight } from "lucide-react";
// import heroimage from "@/assets/images/hero.svg";
// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="grid  w-full grid-cols-1 gap-8 md:grid-cols-2 items-center text-black pt-10 ">
//       {/*Left Picture  */}
//       <div className="relative aspect-video w-full overflow-hidden rounded-lg">
//         <Image src={heroimage} alt={"aboutimage"} fill priority />
//       </div>

//       {/* Right - Text */}
//       <div className="text-black">
//         <p className="mb-2 text-sm font-medium uppercase tracking-widest">
//           About Us
//         </p>

//         <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600">
//           Heading
//         </h1>

//         <p className="mt-4 max-w-xl text-md sm:text-md text-gray-600">
//           Deerfield is a well-maintained neighborhood of 129 homes in a PUD
//           inside the city limits of Knoxville, Tennessee. Homeowners own their
//           entire structure and the ground on which it is situated. The homes are
//           either two- or three-bedroom units varying in size from approximately
//           1080 square feet to 1900 square feet.
//         </p>

//         <div>
//           <Button className="mt-2 size=lg">
//             Learn More
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
