import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'
import ApiError from '../../../errors/ApiError'
import status from 'http-status'

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    publication_date: {
      type: String,
      required: true,
    },
    reviews: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

bookSchema.pre('save', async function (next) {
  const isExist = await Book.findOne({ title: this.title, author: this.author })
  if (isExist) {
    throw new ApiError(
      status.CONFLICT,
      'This book is already exist our database!',
    )
  }
  next()
})

export const Book = model<IBook, BookModel>('Book', bookSchema)
