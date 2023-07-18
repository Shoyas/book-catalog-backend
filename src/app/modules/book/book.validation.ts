import { z } from 'zod'

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .optional(),
    publication_date: z.string({
      required_error: 'Publication date is required',
    }),
    reviews: z.string().optional(),
  }),
})

const updateBookZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'Genre is required',
      })
      .optional(),
    publication_date: z
      .string({
        required_error: 'Publication date is required',
      })
      .optional(),
    reviews: z.string().optional(),
  }),
})

const createBookCommentZodSchema = z.object({
  body: z.object({
    reviews: z.string().optional(),
  }),
})

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
  createBookCommentZodSchema,
}
