"use server";
import { prisma } from "@/lib/prisma";

type EditTaskProps = {
  editedTask: string;
  taskId: string;
};

export const editTask = async ({ editedTask, taskId }: EditTaskProps) => {
  try {
    if (!editedTask || !taskId) return;

    const updatedTask = await prisma.tasks.update({
      where: { id: taskId },
      data: { task: editedTask },
    });

    if (!updatedTask) {
      console.log("Task has not been updated");
      return;
    }

    return updatedTask;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
