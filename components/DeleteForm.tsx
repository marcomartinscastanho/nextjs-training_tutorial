"use client";

import { deleteTask } from "@/utils/actions";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  id: string;
}

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "deleting..." : "DELETE"}
    </button>
  );
};

const DeleteForm: FC<Props> = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;
