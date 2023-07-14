import { RequestHandler } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const user = req.body
  const result = await UserService.createUser(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully!',
    data: result,
  })
})

export const UserController = {
  createUser,
}
