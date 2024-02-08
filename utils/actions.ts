"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";

export const getAllTasks = async () =>
  prisma.task.findMany({ orderBy: { createdAt: "desc" } });

export const createTask = async (formData: FormData) => {
  const content = formData.get("content") as string;
  if (content) {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
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

export const editTask = async (formData: FormData) => {};
