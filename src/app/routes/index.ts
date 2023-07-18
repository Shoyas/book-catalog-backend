import express, { Router } from 'express'
import { BookRoutes } from '../modules/book/book.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router: Router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
