import { z } from "zod";

export const reviewFormSchema = z.object({
    title: z.string().min(1, "Please enter a review title").max(50, "Title cannot exceed 50 characters"),
    description: z.string().min(1, "Please enter a description"),
    rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
});

export type ReviewSchema = z.infer<typeof reviewFormSchema>;
