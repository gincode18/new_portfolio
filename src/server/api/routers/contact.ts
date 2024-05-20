import { z } from "zod";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(
      z.object({
        from: z.string().optional(),
        message: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const transporter = nodemailer.createTransport({
        host: env.EMAIL_SERVER_HOST,
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: `${input.from}`, // sender address
        to: "vishalkamboj9211@gmail.com", // list of receivers
        subject: "Message From Portfolio", // Subject line
        text: `${input.message}`, // plain text body
        html: `<h1>Message form ${input.from}<h1/><b>${input.message}</b>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      return info.messageId;
    }),
});
