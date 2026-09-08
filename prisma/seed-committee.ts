import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const committees = [
  {
    name: "Architectural Control",
    image: "arch",
    members: ["Rick Snow", "Mark McKinney", "Tommie Wilkes"],
    sortOrder: 1,
  },
  {
    name: "Grounds Committee",
    image: "grounds",
    members: ["Maureen Mercer", "Mark McKinney", "John Torbett"],
    sortOrder: 2,
  },
  {
    name: "Hospitality Committee",
    image: "hospitality",
    members: ["Maureen Mercer", "Tommie Wilkes"],
    sortOrder: 3,
  },
  {
    name: "Pool Committee",
    image: "pool",
    members: ["John Torbett", "Mark McKinney"],
    sortOrder: 4,
  },
  {
    name: "Roof Committee",
    image: "roof",
    members: ["Rick Snow", "Dianne Green", "Deborah Smith"],
    sortOrder: 5,
  },
];

async function main() {
  console.log("Seeding committees...");

  // Optional: remove existing committees first
  await prisma.committee.deleteMany();

  await prisma.committee.createMany({
    data: committees,
  });

  console.log(`Created ${committees.length} committees.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
