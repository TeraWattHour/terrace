import { z } from "zod";

export const search_list_dto = z.object({
  term: z.string().min(3).max(64),
});

export const create_list_dto = z.object({
  name: z.string().min(4).max(48),
  description: z.string().min(4).max(255),
  thumbnail: z
    .string()
    .url()
    .transform((x) => (x.length === 0 ? undefined : x))
    .optional(),
  places: z
    .array(
      z.object({
        name: z.string().min(4).max(48),
        description: z.string().min(4).max(255),
        thumbnail: z
          .string()
          .url()
          .transform((x) => (x.length === 0 ? undefined : x))
          .optional(),
        banner: z
          .string()
          .url()
          .transform((x) => (x.length === 0 ? undefined : x))
          .optional(),
        lat: z.number().min(-90).max(90),
        lon: z.number().min(-180).max(180),
      })
    )
    .min(2)
    .max(100),
});

export const get_list_dto = z.object({
  listId: z
    .string()
    .transform(Number)
    .refine((x) => x >= 1),
});

export const get_list_by_user_dto = z.object({
  userId: z.string().cuid(),
  take: z
    .string()
    .transform(Number)
    .default("50")
    .refine((x) => x >= 1 && x <= 100),
  cursor: z
    .string()
    .transform(Number)
    .refine((x) => x >= 1)
    .optional(),
});
