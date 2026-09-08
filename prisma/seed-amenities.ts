import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const amenities = [
  {
    title: "Swimming Pool",
    //image: "pool",
    description: null,
    sortOrder: 0,
    items: [
      "Pool – Deerfield Pool is available May 1 – September 30, and the hours are 8:00 a.m. to 10:00 P.M.",
      "A resident must accompany guests at all times. Pool rules are posted, and failure to comply with rules can result in cancellation of a pool card.",
      "Compliance with pool rules is for the safety of all users. No animals are allowed in the pool – this is a health department violation.",
    ],
  },
  {
    title: "Parking",
    //image: "parking",
    description: null,
    sortOrder: 1,
    items: [
      "PARKING ON THE STREET OVERNIGHT IS PROHIBITED.",
      "Each condominium unit is assigned parking spaces for residents and guests.",
      "Vehicles must be parked only in designated parking spaces.",
      "Parking areas are not to be used for storage of vehicles or other items.",
      "Please ensure that all vehicles are properly registered and operational.",
    ],
  },
  {
    title: "Pets",
    //image: "pets",
    description: null,
    sortOrder: 2,
    items: [
      "Pets are welcome at Deerfield, subject to the community's rules and regulations.",
      "Pets must be kept under control and should not create a nuisance for other residents.",
      "Residents are responsible for cleaning up after their pets.",
    ],
  },
  {
    title: "Lawncare",
    //image: "lawncare",
    description: null,
    sortOrder: 3,
    items: [
      "Lawncare is provided as part of the community's maintenance services.",
      "Residents are responsible for maintaining items and landscaping located within their individual areas as required.",
      "Please see the Deerfield Maintenance information for additional details.",
    ],
  },
];

async function main() {
  console.log("Seeding amenities...");

  for (const amenity of amenities) {
    await prisma.amenity.create({
      data: amenity,
    });
  }

  console.log("Amenities seeded successfully.");
}

main()
  .catch((error) => {
    console.error("Error seeding amenities:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
