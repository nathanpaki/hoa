import { prisma } from "../prisma";

export async function getMeeting() {
  return await prisma.meeting.findMany({});
}
