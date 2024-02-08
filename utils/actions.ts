"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () =>
  prisma.task.findMany({ orderBy: { createdAt: "desc" } });

export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  if (content) {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
  }
};

export const createTaskV2 = async (prevState: any, formData: FormData) => {
  // delay for testing purposes
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const content = formData.get("content") as string;
  if (content) {
    return prisma.task
      .create({ data: { content } })
      .then(() => {
        revalidatePath("/tasks");
        return { message: "success !!!" };
      })
      .catch((error) => {
        return { message: "error..." };
      });
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
