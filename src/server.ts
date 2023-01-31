import express from 'express';
import { Router, Request, Response } from 'express';
require('dotenv').config();

const app = express();
const router = Router();
app.use(express.json());

router.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

router.post('/buying', (req: Request, res: Response) => {
  res.send('hellob');
});

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
