import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
import httpStatus from 'http-status'

const app: Application = express()

app.use(cors())

//! Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! Application Routes
app.use('/api/v1', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})

//! handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

app.use(globalErrorHandler)

export default app
