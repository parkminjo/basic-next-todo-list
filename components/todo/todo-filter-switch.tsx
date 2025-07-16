"use client";

import React, { useId } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTodoFilterStore } from "@/store/use-todo-filter-store";

const TodoFilterSwitch = () => {
  const switchId = useId();
  const { filter, setFilter } = useTodoFilterStore();

  const handleChangeChecked = (checked: boolean) => {
    setFilter(checked ? "completed" : "all");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={switchId}
        checked={filter === "completed"}
        onCheckedChange={handleChangeChecked}
      />
      <Label htmlFor={switchId}>Completed</Label>
    </div>
  );
};

export default TodoFilterSwitch;
