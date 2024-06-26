import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

const app = express()

app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
)
