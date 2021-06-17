import dotenv from 'dotenv'
import path from 'path';
import express from "express";
import morgan from 'morgan';

dotenv.config()

import { notFound, errorHandler } from "./middlewares/error.js";
import connectDB from "./config/db.js";
import auth from "./routes/auth.js";
import restaurant from "./routes/restaurant.js";

connectDB()

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use('/api', auth);
app.use('/api', restaurant)

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
