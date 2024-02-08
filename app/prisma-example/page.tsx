import React from 'react';
import prisma from '@/utils/db';

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'wake up',
    },
  });

  return await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">Prisma Example Page</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          😴 {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaExamplePage;
