"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
        })
            .optional(),
        publication_date: zod_1.z.string({
            required_error: 'Publication date is required',
        }),
        reviews: zod_1.z.string().optional(),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title is required',
        })
            .optional(),
        author: zod_1.z
            .string({
            required_error: 'Author is required',
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: 'Genre is required',
        })
            .optional(),
        publication_date: zod_1.z
            .string({
            required_error: 'Publication date is required',
        })
            .optional(),
        reviews: zod_1.z.string().optional(),
    }),
});
const createBookCommentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        reviews: zod_1.z.string().optional(),
    }),
});
exports.BookValidation = {
    createBookZodSchema,
    updateBookZodSchema,
    createBookCommentZodSchema,
};
