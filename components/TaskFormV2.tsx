"use client";

import React, { useEffect } from "react";
import { State, createTaskV2 } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

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

const initialState: State = {
  message: null,
};

const TaskFormV2 = () => {
  const [state, formAction] = useFormState(createTaskV2, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message === "success") {
      toast.success("task created");
    }
  }, [state]);

  return (
    <form action={formAction}>
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
