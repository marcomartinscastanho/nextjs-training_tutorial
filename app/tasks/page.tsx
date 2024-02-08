import TaskFormV2 from "@/components/TaskFormV2";
import TaskList from "@/components/TaskList";
import React from "react";

export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormV2 />
      <TaskList />
    </div>
  );
};

export default TasksPage;
