import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'

import productRoute from './routes/productRoute.js'
import stripeRoute from './routes/stripeRoute.js'
import subscriberRoute from './routes/subscriberRoute.js'

config()

const app = express()

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  req.cloudinary = cloudinary
  next()
})

app.use('/products', productRoute)
app.use('/stripe', stripeRoute)
app.use('/subscriber', subscriberRoute)

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
)

mongoose
  .connect(process.env.mongoDb)
  .then(() => console.log('Database is connected'))
  .catch((error) => console.log(error))

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  },
})

const parser = multer({ storage: storage })

//ROUTE FOR UPLOADING THE FILE TO CLOUDINARY
app.post('/upload-image', parser.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }

  try {
    if (!req.file.path) {
      throw new Error('File uploaded, but no path available')
    }

    res.json({ secure_url: req.file.path })
  } catch (error) {
    console.error('Error during file upload: ', error)
    res.status(500).send('Internal server error')
  }
})
