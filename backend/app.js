import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  const error = new Error(`Not found ${req.originalURL}`);
  res.status(404);
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);
