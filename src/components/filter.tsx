import { Check, CircleEllipsis, List } from "lucide-react";
import { Badge } from "./ui/badge";

export type FilterType = "all" | "pending" | "done";

type FilterProps = {
  currentFilter: FilterType;
  setCurrentFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

const Filter = ({ currentFilter, setCurrentFilter }: FilterProps) => {
  return (
    <div className="flex gap-2 mb-4">
      <Badge
        className="cursor-pointer"
        variant={`${currentFilter === "all" ? "default" : "outline"}`}
        onClick={() => setCurrentFilter("all")}
      >
        <List />
        Todos
      </Badge>
      <Badge
        className="cursor-pointer"
        variant={`${currentFilter === "pending" ? "default" : "outline"}`}
        onClick={() => setCurrentFilter("pending")}
      >
        <CircleEllipsis />
        In Progress
      </Badge>
      <Badge
        className="cursor-pointer"
        variant={`${currentFilter === "done" ? "default" : "outline"}`}
        onClick={() => setCurrentFilter("done")}
      >
        <Check />
        Done
      </Badge>
    </div>
  );
};

export default Filter;
