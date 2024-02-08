"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () =>
  prisma.task.findMany({ orderBy: { createdAt: "desc" } });

export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  if (content) {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
  }
};

export type State = {
  message: string | null;
};

export const createTaskV2 = async (
  prevState: State | undefined,
  formData: FormData
) => {
  const content = formData.get("content") as string;
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    return prisma.task.create({ data: { content } }).then(() => {
      revalidatePath("/tasks");
      return { message: "success !!!" };
    });
  } catch (error) {
    console.log(error);

    return { message: "error..." };
  }
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  if (id) {
    await prisma.task.delete({ where: { id } });
    revalidatePath("/tasks");
  }
};

export const getTask = async (id: string) =>
  prisma.task.findUnique({ where: { id } });

export const editTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const completed = formData.get("completed") as string;

  await prisma.task
    .update({
      where: { id },
      data: {
        content,
        completed: completed === "on",
      },
    })
    .then(() => redirect("/tasks"));
};
