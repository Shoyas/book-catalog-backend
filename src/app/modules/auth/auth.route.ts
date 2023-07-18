import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'
import { UserValidation } from '../user/user.validation'
import { UserController } from '../user/user.controller'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
)
router.post(
  '/signin',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser,
)
router.get('/:id', UserController.getSingleUser)
router.post('/logout', AuthController.logoutUser)
router.get('/', UserController.getAllUsers)

export const AuthRoutes = router
