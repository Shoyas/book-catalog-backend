"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-book', (0, validateRequest_1.default)(book_validation_1.BookValidation.createBookZodSchema), book_controller_1.BookController.createBook);
router.put('/edit-book/:id', (0, validateRequest_1.default)(book_validation_1.BookValidation.updateBookZodSchema), book_controller_1.BookController.updateBook);
router.post('/comment/:id', (0, validateRequest_1.default)(book_validation_1.BookValidation.createBookCommentZodSchema), book_controller_1.BookController.createComment);
router.get('/:id', book_controller_1.BookController.getSingleBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
router.get('/', book_controller_1.BookController.getAllBooks);
exports.BookRoutes = router;
