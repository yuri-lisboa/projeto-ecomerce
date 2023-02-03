import { Product } from '../../models/product';

export interface IProductService {
  create(product: Product): Promise<string>;
  update(product: Product): Promise<string>;
  delete(productId: string, customerId: number): Promise<void>;
  get(productId: string, customerId: number): Promise<Product>;
}

export interface IProductRepository {
  create(product: Product): Promise<string>;
  update(product: Product): Promise<string>;
  get(id: string, customerId: number): Promise<Product | null>;
  deleteIfExists(productId: string, customerId: number): Promise<boolean>;
}
