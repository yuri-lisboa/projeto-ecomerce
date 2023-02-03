const { StatusCodes } = require('http-status-codes');
import { Request, response } from 'express';
import { Product } from '../../models/product';
import { HttpResponse } from '../interface';
import { IProductService } from '../interface/product';

export interface IProductController {
  create(req: Request, res: Response): Promise<HttpResponse<Product>>;
}

export class ProductController implements IProductController {
  constructor(private readonly service: IProductService) {}

  async create(
    request: Request,
    resonse: Response
  ): Promise<HttpResponse<Product>> {
    const data: Product = request.body;

    const product = await this.service.create(data);

    response.status(StatusCodes.CREATED).json({ product });
  }
}
