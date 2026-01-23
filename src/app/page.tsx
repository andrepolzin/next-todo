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

const Home = () => {
  return (
    <main className="flex justify-center items-center bg-gray-100 w-full h-screen">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Add task" />
          <Button variant={"default"} className="cursor-pointer">
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
            <div className="flex h-14 justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Study ReactJs</p>
              <div className="flex items-center gap-2">
                <EditTask />
                <Trash2 size={18} className="cursor-pointer" />
              </div>
            </div>
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
