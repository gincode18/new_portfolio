import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.projects.findMany({
      orderBy: {
        order: "desc",
      },
    });
    return projects;
  }),
});
