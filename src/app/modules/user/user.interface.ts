import { Model } from 'mongoose'

export type IUserRoles = 'admin' | 'author' | 'buyer'

export type IUser = {
  email: string
  password: string
  role: IUserRoles
  id?: string
}
//! Try
export type UserModel = {
  isUserExist(
    email: string,
  ): Promise<Pick<IUser, 'email' | 'password' | 'role' | 'id'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>

// export type UserModel = Model<IUser, Record<string, unknown>>
