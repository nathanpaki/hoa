import { prisma } from "../prisma";

export async function getAmenities() {
  return await prisma.amenity.findMany({
    orderBy: {
      sortOrder: "asc",
    },
  });
}
