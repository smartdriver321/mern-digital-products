import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

config()

const app = express()

app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
)

mongoose
  .connect(process.env.mongoDb)
  .then(() => console.log('Database is connected'))
  .catch((error) => console.log(error))
