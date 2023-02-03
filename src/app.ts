require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const productRouter = require('./application/routes/product');

const express = require('express');
const app = express();
let path = '/api/v1/ecommerce';

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

app.use(path, productRouter);

// app.get('/', (req: Request, res: any) => {
//   res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
// });

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
