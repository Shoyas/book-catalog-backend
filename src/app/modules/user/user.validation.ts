import { z } from 'zod'
import { userRoles } from './user.constant'

const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum([...userRoles] as [string, ...string[]], {
      required_error: 'Role is required',
    }),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
