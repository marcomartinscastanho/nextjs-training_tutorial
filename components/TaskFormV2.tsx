"use client";

import React from "react";
import { createTaskV2 } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait" : "CREATE TASK"}
    </button>
  );
};

const TaskFormV2 = () => {
  return (
    <form action={createTaskV2}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormV2;
