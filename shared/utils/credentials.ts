import { z } from "zod";

export const ZCredentials = z.object({
    password: z.string(),
});

export type CredentialsWrite = z.infer<typeof ZCredentials>;
