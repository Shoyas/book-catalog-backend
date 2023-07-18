import httpStatus from 'http-status'
import { User } from '../user/user.model'
import { ILoginUser, ILoginUserResponse } from './auth.interface'
import ApiError from '../../../errors/ApiError'

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload
  // check user exist or not
  const isUserExist = await User.isUserExist(email)
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }
  return {
    email,
  }
}

const logoutUser = async (): Promise<void> => {}

export const AuthService = {
  loginUser,
  logoutUser,
}
