import { Model } from 'mongoose'

export type IUserRoles = 'admin' | 'author' | 'buyer'

export type IUser = {
  email: string
  password: string
  role: IUserRoles
}

export type UserModel = Model<IUser, Record<string, unknown>>
