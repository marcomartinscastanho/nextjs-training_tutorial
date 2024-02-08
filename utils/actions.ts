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
