import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const resources = [
  {
    name: "Zoned Schools",
    image: "school",
    lists: [
      "West Hills Elementary",
      "Bearden Middle School",
      "Bearden High School",
    ],
    sortOrder: 1,
  },

  {
    name: "Recycling & Trash Pick-up",
    image: "recycle",
    lists: [
      "The City of Knoxville provides free garbage and recycle pick-up service for Deerfield, and special bins have been provided for each unit. Weekly garbage pick-up is currently scheduled for Thursdays. Recycle pick-up is provided bi-weekly on Tuesdays.",
      "The bins must be removed from the curb and placed out of sight as soon as possible after pick-up and are NEVER to be stored in front of units or on front porches.",
    ],
    sortOrder: 2,
  },

  {
    name: "Utilities",
    image: "utilities",
    lists: [
      "Knoxville Utilities Board (KUB) provides electricity, gas, water and sewer services for Deerfield.",
      "Comcast has underground TV/Internet cables installed in Deerfield.",
      "Satellite TV/Internet service is also available.",
    ],
    sortOrder: 3,
  },

  {
    name: "Satellite Dishes",
    image: "satellite",
    lists: [
      "They do not exceed 18 inches in diameter.",
      "They are installed at the rear of the residence.",
      "They are not visible over the roofline from the front of the property.",
    ],
    sortOrder: 4,
  },
];

async function main() {
  console.log("Seeding resources...");

  // Optional: clear existing resources first
  await prisma.resources.deleteMany();

  await prisma.resources.createMany({
    data: resources,
  });

  console.log(`Created ${resources.length} resources.`);
}

main()
  .catch((error) => {
    console.error("Error seeding resources:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
