import { z } from "zod";

export const provider_callback_dto = z.object({
  provider: z.enum(["discord"]),
});

export const discord_response_dto = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string(),
  email: z.string().email(),
  verified: z.boolean(),
});
