"use server";
import { prisma } from "@/lib/prisma";

export const newTask = async (task: string) => {
  try {
    if (!task) return;

    const newTask = await prisma.tasks.create({
      data: { task, done: false },
    });

    if (!newTask) return;

    return newTask;
  } catch (error) {
    throw error;
  }
};
