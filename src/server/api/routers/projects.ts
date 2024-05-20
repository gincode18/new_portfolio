import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const projects = ctx.db.projects.findMany({
      orderBy: {
        order: "desc",
      },
    });
    return projects;
  }),
});
