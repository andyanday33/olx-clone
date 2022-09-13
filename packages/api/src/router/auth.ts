import { t } from "../trpc";
import { z } from "zod";

export const authRouter = t.router({
  login: t.procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: { email: input.email, password: input.password },
      });
    }),
  signUp: t.procedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }),
});
