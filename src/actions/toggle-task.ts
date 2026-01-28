"use server";
import { prisma } from "@/lib/prisma";

export const toggleTask = async (taskId: string) => {
  try {
    const currentTask = await prisma.tasks.findUnique({
      where: { id: taskId },
    });

    const toggledTask = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: { done: !currentTask.done },
    });

    if (!toggledTask) return;

    console.log({
      success: true,
      message: "Task has been updated",
      toggledTask,
    });

    return toggledTask;
  } catch (error) {
    throw error;
  }
};
