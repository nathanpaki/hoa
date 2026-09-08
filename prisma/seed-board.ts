import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const boardMembers = [
  "Deborah Smith",
  "Dianna Green",
  "Dorothy Beaver",
  "Emily Alvanas",
  "John Torbett",
  "Mark McKinney",
  "Maureen Mercer",
  "Rick Snow",
  "Tommie Wilkes",
];

async function main() {
  for (let i = 0; i < boardMembers.length; i++) {
    await prisma.boardMember.create({
      data: {
        name: boardMembers[i],
        title: "",
        sortOrder: i,
      },
    });
  }

  console.log("Board members seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
