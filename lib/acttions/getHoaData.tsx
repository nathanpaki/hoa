import { prisma } from "../prisma";

export async function getManagement() {
  return await prisma.management.findMany({});
}

export async function getPoolLiason() {
  return await prisma.poolLiaison.findMany({});
}
