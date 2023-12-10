import { z } from "zod";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Title is required..",
      invalid_type_error: "Title is req...",
    })
    .min(3, {
      message: "Title length should be greater than 2 letters",
    }),
  id: z.string(),
});
