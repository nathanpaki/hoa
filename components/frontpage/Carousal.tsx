"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const condoImages = [
  { src: entrance, alt: "Condo entrance" },
  { src: greenery, alt: "Community greenery" },
  { src: greenery2, alt: "Community greenery" },
  { src: homes3, alt: "Condo homes" },
  { src: homes4, alt: "Condo homes" },
  { src: homes5, alt: "Condo homes" },
  { src: pavilion, alt: "Community pavilion" },
  { src: pavilion2, alt: "Community pavilion" },
  { src: plat, alt: "Community plat" },
  { src: pool, alt: "Community pool" },
  { src: pool2, alt: "Community pool" },
  { src: pool3, alt: "Community pool" },
  { src: rowOfHomes, alt: "Row of homes" },
  { src: rowOfHomes2, alt: "Row of homes" },
];

export function CarouselSize() {
  return (
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
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="!left-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />

      <CarouselNext className="!right-2 !top-1/2 !z-20 !-translate-y-1/2 bg-white/80 shadow-md hover:bg-white" />
    </Carousel>
  );
}
