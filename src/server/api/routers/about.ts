import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const aboutRouter = createTRPCRouter({
  getAllData: publicProcedure.query(async ({ ctx }) => {
    const experience = await ctx.db.experience.findMany({
      orderBy: {
        order: "desc",
      },
    });
    const skills = await ctx.db.skills.findMany();
    return { experience, skills };
  }),
});
