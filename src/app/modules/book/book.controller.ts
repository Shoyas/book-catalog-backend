import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { BookService } from './book.service'
import { IBook } from './book.interface'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const createBook: RequestHandler = catchAsync(async (req, res) => {
  const { ...bookData } = req.body
  const result = await BookService.createBook(bookData)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book is created successfully',
    data: result,
  })
})

export const BookController = {
  createBook,
}
