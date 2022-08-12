import { z } from "zod";

export const get_user_dto = z.object({
  userId: z.string().cuid(),
});
