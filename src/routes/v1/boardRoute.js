import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { broadValidation } from '~/validations/broadValidation'

const Router = express.Router()
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'GET: API get list boards' })
  })
  .post(broadValidation.createNew)

export const boardRoute = Router