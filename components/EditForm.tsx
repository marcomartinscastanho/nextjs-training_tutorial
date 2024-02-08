import { Task } from "@prisma/client";
import React, { FC } from "react";

interface Props {
  task: Task;
}

const EditForm: FC<Props> = ({ task }) => {
  return <div>EditForm</div>;
};

export default EditForm;
