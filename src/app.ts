import express from 'express';
import ProductController from './controllers/products.controller';
import UserController from './controllers/user.controller';

const app = express();

const productController = new ProductController();
const userCntroller = new UserController();

app.use(express.json());

app.get('/products', productController.getAll);

app.post('/products', productController.create);

app.post('/users', userCntroller.create);

export default app;
