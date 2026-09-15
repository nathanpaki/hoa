import { prisma } from "../prisma";

export async function getManagement() {
  return prisma.management.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getPoolLiaison() {
  return prisma.poolLiaison.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getFee(category: string) {
  return prisma.fee.findFirst({
    where: {
      category,
    },
    orderBy: {
      sortOrder: "asc",
    },
  });
}
