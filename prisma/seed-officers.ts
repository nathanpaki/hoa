import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const officers = [
  {
    name: "Rick Snow",
    title: "President",
    sortOrder: 1,
  },
  {
    name: "John Torbett",
    title: "Vice President",
    sortOrder: 2,
  },
  {
    name: "Dorothy Beaver",
    title: "Treasurer",
    sortOrder: 3,
  },
  {
    name: "Emily Alvanas",
    title: "Secretary",
    sortOrder: 4,
  },
];

async function main() {
  // console.log(
  //   "Runtime models:",
  //   Object.keys((prisma as any)._runtimeDataModel.models),
  // );

  await prisma.officer.createMany({
    data: officers,
  });

  console.log("Officers seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
