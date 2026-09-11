// lib/actions/meeting.ts

"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMeeting() {
  return prisma.meeting.findFirst();
}

export async function updateMeeting(data: {
  dayOfWeek: string;
  weekOfMonth: string;
  time: string;
  location: string;
  address: string;
}) {
  const result = await prisma.meeting.updateMany({
    data: {
      dayOfWeek: data.dayOfWeek,
      weekOfMonth: data.weekOfMonth || null,
      time: data.time,
      location: data.location,
      address: data.address || null,
    },
  });

  if (result.count !== 1) {
    throw new Error(
      `Expected exactly one Meeting record, found ${result.count}.`,
    );
  }

  revalidatePath("/");
  revalidatePath("/admin/meeting");

  return { success: true };
}
