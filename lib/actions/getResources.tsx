import { prisma } from "../prisma";

export async function getResources() {
  return await prisma.resources.findMany({
    orderBy: {
      sortOrder: "asc",
    },
  });
}
