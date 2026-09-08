import { Quote } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    text: "Deerfield is a peaceful and friendly community. We enjoy the neighborhood and the people who live here.",
  },
  {
    text: "Moving to Deerfield was the best decision for our family. We love the location and the sense of community.",
  },
  {
    text: "Deerfield offers the perfect blend of convenience, community, and a well-maintained neighborhood.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Residents
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Residents Say
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Hear what some of our residents have to say about living in
            Deerfield.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="rounded-lg bg-primary p-3 w-fit">
                  <Quote className="h-6 w-6 text-primary-foreground " />
                </div>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export function Testimonials() {
//   return (
//     <div className="text-center mb-3">
//       <h1 className="text-2xl font-bold tracking-tight sm:text-xl md:text-2xl text-gray-600 mb-3">
//         Testimonials
//       </h1>
//       <div className="flex flex-col md:flex-row gap-6 items-center">
//         <Card className="w-full max-w-sm bg-gray-200">
//           <CardContent>
//             <div>
//               Deerfield is a peaceful and welcoming community where neighbors
//               look out for one another. The well-maintained surroundings and
//               strong sense of belonging make it a wonderful place to live.
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="w-full max-w-sm bg-gray-200">
//           <CardContent>
//             <div>
//               Moving to Deerfield was the best decision for our family. The
//               friendly atmosphere, excellent amenities, and dedicated
//               association make everyday living comfortable and enjoyable.
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="w-full max-w-sm bg-gray-200">
//           <CardContent>
//             <div>
//               Deerfield offers the perfect blend of tranquility and convenience.
//               The beautifully kept homes and close-knit community create an
//               ideal environment to call home.
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
