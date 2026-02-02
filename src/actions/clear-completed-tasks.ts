"use server";
import { prisma } from "@/lib/prisma";

export const clearCompleted = async () => {
  try {
    const deletedTasks = await prisma.tasks.deleteMany({
      where: {
        done: true,
      },
    });

    return deletedTasks;
  } catch (error) {
    throw error;
  }
};
