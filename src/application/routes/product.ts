import express from 'express';
import { Product } from '../../models/product';

const router = express.Router();

router.route('/').post(Product).get(Product);
