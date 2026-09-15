"use client";

import Image from "next/image";

import entrance from "@/assets/images/condo/entrance.png";
import greenery from "@/assets/images/condo/greenery.png";
import greenery2 from "@/assets/images/condo/greenery2.jpg";
import homes3 from "@/assets/images/condo/homes3.jpg";
import homes4 from "@/assets/images/condo/homes4.jpg";
import homes5 from "@/assets/images/condo/homes5.jpg";
import pavilion from "@/assets/images/condo/pavilion.jpg";
import pavilion2 from "@/assets/images/condo/pavilion2.jpg";
import plat from "@/assets/images/condo/plat.png";
import pool from "@/assets/images/condo/pool.jpg";
import pool2 from "@/assets/images/condo/pool2.jpg";
import pool3 from "@/assets/images/condo/pool3.jpg";
import rowOfHomes from "@/assets/images/condo/rowofhomes.jpg";
import rowOfHomes2 from "@/assets/images/condo/rowofhomes2.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const condoImages = [
  { src: entrance, alt: "Deerfield entrance" },
  { src: homes3, alt: "Deerfield homes" },
  { src: homes4, alt: "Deerfield homes" },
  { src: homes5, alt: "Deerfield homes" },
  { src: pavilion, alt: "Deerfield pavilion" },
  { src: pavilion2, alt: "Deerfield pavilion" },
  { src: plat, alt: "Deerfield community map" },
  { src: pool, alt: "Deerfield swimming pool" },
  { src: pool2, alt: "Deerfield swimming pool" },
  { src: pool3, alt: "Deerfield swimming pool" },
  { src: rowOfHomes, alt: "Deerfield homes" },
  { src: rowOfHomes2, alt: "Deerfield homes" },
  { src: greenery, alt: "Deerfield landscaping" },
  { src: greenery2, alt: "Deerfield landscaping" },
];

export default function CommunityGallery() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Community
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Life at Deerfield
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Take a look around our neighborhood and the amenities that make
            Deerfield a great place to call home.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {condoImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="!left-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />

          <CarouselNext className="!right-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
}

// "use client";

// import * as React from "react";
// import Image from "next/image";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import entrance from "@/assets/images/condo/entrance.png";
// import greenery from "@/assets/images/condo/greenery.png";
// import greenery2 from "@/assets/images/condo/greenery2.jpg";
// import homes3 from "@/assets/images/condo/homes3.jpg";
// import homes4 from "@/assets/images/condo/homes4.jpg";
// import homes5 from "@/assets/images/condo/homes5.jpg";
// import pavilion from "@/assets/images/condo/pavilion.jpg";
// import pavilion2 from "@/assets/images/condo/pavilion2.jpg";
// import plat from "@/assets/images/condo/plat.png";
// import pool from "@/assets/images/condo/pool.jpg";
// import pool2 from "@/assets/images/condo/pool2.jpg";
// import pool3 from "@/assets/images/condo/pool3.jpg";
// import rowOfHomes from "@/assets/images/condo/rowofhomes.jpg";
// import rowOfHomes2 from "@/assets/images/condo/rowofhomes2.jpg";

// const condoImages = [
//   { src: entrance, alt: "Condo entrance" },
//   { src: greenery, alt: "Community greenery" },
//   { src: greenery2, alt: "Community greenery" },
//   { src: homes3, alt: "Condo homes" },
//   { src: homes4, alt: "Condo homes" },
//   { src: homes5, alt: "Condo homes" },
//   { src: pavilion, alt: "Community pavilion" },
//   { src: pavilion2, alt: "Community pavilion" },
//   { src: plat, alt: "Community plat" },
//   { src: pool, alt: "Community pool" },
//   { src: pool2, alt: "Community pool" },
//   { src: pool3, alt: "Community pool" },
//   { src: rowOfHomes, alt: "Row of homes" },
//   { src: rowOfHomes2, alt: "Row of homes" },
// ];

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//       className="relative w-full"
//     >
//       <CarouselContent>
//         {condoImages.map((image, index) => (
//           <CarouselItem
//             key={index}
//             className="basis-full sm:basis-1/2 md:basis-1/3"
//           >
//             <div className="relative aspect-square w-full overflow-hidden rounded-lg">
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
//                 className="object-cover"
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>

//       <CarouselPrevious className="!left-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />

//       <CarouselNext className="!right-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />
//     </Carousel>
//   );
// }
