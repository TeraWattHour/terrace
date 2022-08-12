import { z } from "zod";
import { isUrl } from "../utils/isUrl";

export const get_place_dto = z.object({
  placeId: z
    .string()
    .transform(Number)
    .refine((x) => x >= 1),
});

export const edit_place_dto = z.object({
  name: z.string().min(4).max(48),
  description: z.string().min(4).max(255),
  thumbnail: z
    .string()
    .refine((x) => !x || x.length === 0 || isUrl(x))
    .optional(),
  lat: z.number().min(-90).max(90),
  lon: z.number().min(-180).max(180),
});
