import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatest: publicProcedure.query(({ ctx }) => {
    const projects = ctx.db.projects.findMany({
      orderBy: {
        order: "desc",
      },
    });
    return projects;
  }),
});
