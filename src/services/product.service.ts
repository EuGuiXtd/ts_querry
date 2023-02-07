import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class BookService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default BookService;