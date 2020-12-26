import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
//import { restart } from 'nodemon'
dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000
const CURRENT_ENV = process.env.NODE_ENV


app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, console.log(`server running on port ${PORT} in ${CURRENT_ENV} mode`.green))

app.get("/", (req, res) => {
    res.send("api running...")
})


    