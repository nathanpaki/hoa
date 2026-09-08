import { prisma } from "../prisma";

export async function getBoardMembers() {
  return await prisma.boardMember.findMany({
    orderBy: {
      sortOrder: "asc",
    },
  });
}
