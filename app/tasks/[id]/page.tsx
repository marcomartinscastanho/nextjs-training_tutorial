import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const TaskPage: FC<Props> = async ({ params }) => {
  const task = await getTask(params.id);
  if (!task) {
    return <div>Could not load task...</div>;
  }

  return (
    <>
      <div className="mb-8">
        <Link href="/tasks" className="btn btn-accent">
          BACK TO TASKS
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default TaskPage;
