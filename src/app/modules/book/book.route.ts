import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BookValidation } from './book.validation'
import { BookController } from './book.controller'

const router = express.Router()

router.post(
  '/create-book',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook,
)
router.put(
  '/edit-book/:id',
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateBook,
)
router.post(
  '/comment/:id',
  validateRequest(BookValidation.createBookCommentZodSchema),
  BookController.createComment,
)
router.get('/:id', BookController.getSingleBook)
router.delete('/:id', BookController.deleteBook)
router.get('/', BookController.getAllBooks)

export const BookRoutes = router
