import db from "@/utils/db";

export const GET = async (request: Request) => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
};
