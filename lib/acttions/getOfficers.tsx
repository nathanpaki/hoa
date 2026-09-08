import { prisma } from "../prisma";

export async function getOfficers() {
  return await prisma.officer.findMany({
    orderBy: {
      sortOrder: "asc",
    },
  });
}
