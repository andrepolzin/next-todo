import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tasks } from "@/generated/prisma/client";
import { useState } from "react";
import { editTask } from "@/actions/edit-task";
import { toast } from "sonner";

type TaskProps = {
  task: Tasks;
  handleGetTasks: () => void;
};

const EditTask = ({ task, handleGetTasks }: TaskProps) => {
  const [editedTask, setEditedTask] = useState<string>(task.task);

  const handleEditTask = async () => {
    try {
      if (task.task !== editedTask) {
        const updatedTask = await editTask({
          editedTask: editedTask,
          taskId: task.id,
        });

        if (!updatedTask) {
          toast.error("An error happened");
          return;
        }

        toast.success("Task has been updated");
        handleGetTasks();
      } else {
        toast.error("Task has not been changed");
        return;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen size={18} className="cursor-pointer hover:text-gray-700" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            placeholder="Edit task..."
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />

          <DialogClose asChild>
            <Button className="cursor-pointer" onClick={handleEditTask}>
              Edit
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
