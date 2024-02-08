import { deleteTask } from "@/utils/actions";
import React, { FC } from "react";

interface Props {
  id: string;
}

const DeleteForm: FC<Props> = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error">DELETE</button>
    </form>
  );
};

export default DeleteForm;
