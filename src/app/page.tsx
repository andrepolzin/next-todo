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
  SquarePen,
  Trash2,
  ListCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
                <SquarePen size={18} className="cursor-pointer" />
                <Trash2 size={18} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between">
            <ListCheck />
            <p>Completed Tasks</p>
            <p className="flex">
              <Trash2 />
              Clear completed tasks
            </p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
