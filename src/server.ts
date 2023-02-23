import express from 'express';
import { Router, Request, Response } from 'express';
import { routes } from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(routes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
