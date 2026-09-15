"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getBoardMembers() {
  return prisma.boardMember.findMany({
    orderBy: [
      {
        sortOrder: "asc",
      },
      {
        name: "asc",
      },
    ],
  });
}

export async function updateBoardMember(
  id: string,
  data: {
    name: string;
    image: string;
    title: string;
    sortOrder: number;
  },
) {
  if (!data.name.trim()) {
    throw new Error("Board member name is required.");
  }

  const member = await prisma.boardMember.update({
    where: {
      id,
    },
    data: {
      name: data.name.trim(),
      image: data.image.trim() || null,
      title: data.title.trim() || null,
      sortOrder: data.sortOrder,
    },
  });

  revalidatePath("/");
  revalidatePath("/board");
  revalidatePath("/admin/board");

  return member;
}

export async function createBoardMember(data: {
  name: string;
  image: string;
  title: string;
  sortOrder: number;
}) {
  if (!data.name.trim()) {
    throw new Error("Board member name is required.");
  }

  const member = await prisma.boardMember.create({
    data: {
      name: data.name.trim(),
      image: data.image.trim() || null,
      title: data.title.trim() || null,
      sortOrder: data.sortOrder,
    },
  });

  revalidatePath("/");
  revalidatePath("/board");
  revalidatePath("/admin/board");

  return member;
}

export async function deleteBoardMember(id: string) {
  await prisma.boardMember.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  revalidatePath("/board");
  revalidatePath("/admin/board");

  return { success: true };
}
