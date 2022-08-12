import { z } from "zod";

export const get_place_dto = z.object({
  placeId: z
    .string()
    .transform(Number)
    .refine((x) => x >= 1),
});
