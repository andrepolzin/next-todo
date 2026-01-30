"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  CircleEllipsis,
  Check,
  Trash2,
  ListCheck,
  Sigma,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import EditTask from "@/components/edit-task";
import { getTasks } from "@/actions/get-tasks-from-db";
import { useEffect, useState } from "react";
import { Tasks } from "@/generated/prisma/client";
import { newTask } from "@/actions/add-task";
import { deleteTask } from "@/actions/delete-task";
import { toast } from "sonner";
import { toggleTask } from "@/actions/toggle-task";

const Home = () => {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [task, setTask] = useState<string>("");

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasks();

      if (!tasks) return;

      setTaskList(tasks);
    } catch (error) {
      throw error;
    }
  };

  const handleAddTask = async () => {
    try {
      if (!task) return;

      const taskAdded = await newTask(task);

      if (!taskAdded) return;
      setTask("");
      toast.success("Task has been created");
      await handleGetTasks();
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      if (!id) return;

      const deletedTask = await deleteTask(id);

      if (!deletedTask) return;

      await handleGetTasks();
      toast.warning("Task has been deleted");
    } catch (error) {
      throw error;
    }
  };

  const handleToggleTask = async (taskId: string) => {
    // Cloning taskList in case there is an error toggling tasks so we can roll back
    // to previous task state
    const previousTasks = [...taskList];

    try {
      if (!taskId) return;

      // update frontend first
      setTaskList((prev) => {
        const updatedTaskList = prev.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              done: !task.done,
            };
          } else {
            return task;
          }
        });

        return updatedTaskList;
      });

      const toggledTask = await toggleTask(taskId);
      console.log("ToggledTask: ", toggledTask);
    } catch (error) {
      // If there is an error, let's set taskList to our previous status
      setTaskList(previousTasks);
      throw error;
    }
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <main className="flex justify-center items-center bg-gray-100 w-full h-screen">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input
            placeholder="Add task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button
            variant={"default"}
            className="cursor-pointer"
            onClick={handleAddTask}
          >
            <Plus />
            Add Task
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2 mb-4">
            <Badge className="cursor-pointer" variant={"default"}>
              <List />
              Todos
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              <CircleEllipsis />
              In Progress
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              <Check />
              Done
            </Badge>
          </div>

          <div className="mt-4 border-b">
            {taskList.map((task) => (
              <div
                className="flex h-14 justify-between items-center border-t"
                key={task.id}
              >
                <div
                  className={`${task.done ? "w-1 h-full bg-green-400" : "w-1 h-full bg-red-400"}`}
                ></div>
                <p
                  className="flex-1 px-2 text-sm cursor-pointer hover:text-gray-700"
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.task}
                </p>

                <div className="flex items-center gap-2">
                  <EditTask task={task} handleGetTasks={handleGetTasks} />
                  <Trash2
                    size={18}
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <ListCheck size={18} />
              <p className="text-xs">Completed Tasks (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="flex rounded-lg justify-center items-center p-1 gap-2 cursor-pointer text-xs h-7"
                  variant={"outline"}
                >
                  <Trash2 size={18} />
                  Clear completed tasks
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete x items?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Yes</AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 bg-gray-100 w-full mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex gap-2 justify-end w-full mt-2">
            <Sigma size={18} />
            <p className="text-xs">3 tasks in total</p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
