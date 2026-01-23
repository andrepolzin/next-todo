import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EditTask = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen size={18} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <Input placeholder="Edit task..." />
          <Button className="cursor-pointer">Edit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
