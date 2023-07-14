import { Model } from 'mongoose'

export type IBook = {
  title: string
  author: string
  genre: string
  price: number
  publication_date: string
  reviews?: string
}

export type BookModel = Model<IBook, Record<string, unknown>>
