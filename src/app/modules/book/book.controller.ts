import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { BookService } from './book.service'
import { IBook } from './book.interface'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'
import { bookFilterableFields } from './book.constant'
import sendResponse from '../../../shared/sendResponse'

const createBook: RequestHandler = catchAsync(async (req, res) => {
  const { ...bookData } = req.body
  const result = await BookService.createBook(bookData)
  // console.log('New Book: ', result)
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book is created successfully',
    data: result,
  })
})

const createComment: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await BookService.createComment(id, updatedData)
  // console.log('Comment:', result)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create comment successfully',
    data: result,
  })
})

const getAllBooks: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, bookFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await BookService.getAllBooks(filters, paginationOptions)
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await BookService.getSingleBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})

const updateBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const updatedData = req.body
  // console.log('Updated Book :', updatedData)
  const result = await BookService.updateBook(id, updatedData)
  // console.log('Updated Book from result:', result)
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

const deleteBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await BookService.deleteBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})

export const BookController = {
  createBook,
  createComment,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
}
