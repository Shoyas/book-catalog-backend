import { z } from 'zod'

const loginZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email address is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
})

export const AuthValidation = {
  loginZodSchema,
}
