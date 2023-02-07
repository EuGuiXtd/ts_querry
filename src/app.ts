import express from 'express';
import ProductController from './controllers/products.controller';
import UserController from './controllers/user.controller';
import OrderController from './controllers/order.controller';

const app = express();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.use(express.json());

app.get('/products', productController.getAll);

app.post('/products', productController.create);

app.post('/users', userController.create);

app.get('/orders', orderController.getAll);

export default app;
