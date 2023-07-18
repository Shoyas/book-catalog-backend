import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { AuthService } from './auth.service'
import sendResponse from '../../../shared/sendResponse'
import { ILoginUserResponse } from './auth.interface'
import httpStatus from 'http-status'

const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const { ...loginData } = req.body
  const result = await AuthService.loginUser(loginData)

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  })
})

const logoutUser: RequestHandler = catchAsync(async (req, res) => {
  await AuthService.logoutUser()

  sendResponse<void>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged out successfully',
  })
})

export const AuthController = {
  loginUser,
  logoutUser,
}
