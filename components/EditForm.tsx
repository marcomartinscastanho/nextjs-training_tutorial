import { editTask } from "@/utils/actions";
import { Task } from "@prisma/client";
import React, { FC } from "react";

interface Props {
  task: Task;
}

const EditForm: FC<Props> = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-8 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        name="content"
        defaultValue={content}
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label curson-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        EDIT
      </button>
    </form>
  );
};

export default EditForm;
