import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

import productRoute from './routes/productRoute.js'

config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/products', productRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
)

mongoose
  .connect(process.env.mongoDb)
  .then(() => console.log('Database is connected'))
  .catch((error) => console.log(error))
