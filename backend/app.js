import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/products', productRoutes);

app.use(notFound, errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
