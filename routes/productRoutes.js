import express from 'express';
import ProductsController from '../controllers/productController';

const controller = new ProductsController();
const productsRouter = express.Router({mergeParams: true});

productsRouter.get('/', controller.getProducts);
productsRouter.get('/:id', controller.getProduct);
productsRouter.post('/', controller.postProduct);
productsRouter.put('/:id', controller.updateProduct);
productsRouter.delete('/:id', controller.deleteProduct);

export default productsRouter;