"use client";

import React from "react";
import { State, createTaskV2 } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

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

  return (
    <form action={formAction}>
      {state?.message ? <p className="mb-2">{state.message}</p> : null}
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
