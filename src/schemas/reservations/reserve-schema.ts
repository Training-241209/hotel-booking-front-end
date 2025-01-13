import { z } from "zod";

export const reserveFormSchema = z.object(
    {
        user_id: z.string(),
        check_in_time: z.string(),
        check_out_time: z.string(),
    }
);

export type ReserveSchema = z.infer<typeof reserveFormSchema>;