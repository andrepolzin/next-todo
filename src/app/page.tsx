import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, List, CircleEllipsis, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <main className="flex justify-center items-center bg-gray-100 w-full h-screen">
      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input placeholder="Add task" />
          <Button variant={"default"} className="cursor-pointer">
            <Plus />
            Add Task
          </Button>
        </div>

        <Separator />

        <div className="flex gap-2">
          <Badge className="cursor-pointer">
            <List />
            Todos
          </Badge>
          <Badge className="cursor-pointer">
            <CircleEllipsis />
            In Progress
          </Badge>
          <Badge className="cursor-pointer">
            <Check />
            Done
          </Badge>
        </div>
      </Card>
    </main>
  );
};

export default Home;
