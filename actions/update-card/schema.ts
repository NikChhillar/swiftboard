import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: "Description is required...",
        invalid_type_error: "Description is required...",
      })
      .min(5, {
        message: "Description is too short...",
      })
  ),
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
