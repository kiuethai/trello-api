/* eslint-disable no-console */
/**

 */

import express from 'express'
import cors from 'cors'
import { corsOptions } from '~/config/cors'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
const START_SERVER = () => {
  const app = express()

  // xử lý cors
  app.use(cors(corsOptions))
  // Enable req.body json data
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', APIs_V1)

  // Middleware xử lý lỗi tập trung
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ${env.AUTHOR}, test ${env.BUILD_MODE}  I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(() => {
    console.log('4. Server is shutting down....')
    CLOSE_DB()
    console.log('5. Disconnected from MongoDB Cloud Atlas')

  })
}
// Immediately-invoked / Anonymous Async Functions(IIFE)
(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('Connected to MongoDB Cloud Atlas!')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
// CONNECT_DB()
//   .then(() => console.log('Connected to MongoDB Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })