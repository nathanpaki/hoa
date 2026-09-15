import { prisma } from "../prisma";

export async function getCommittees() {
  const committees = await prisma.committee.findMany({
    orderBy: {
      sortOrder: "asc",
    },
  });

  // console.log("COMMITTEE DATA:", committees);

  return committees;
}
