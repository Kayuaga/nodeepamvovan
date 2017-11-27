import express from 'express';
import productRoute from './productRoutes';
import userRoute from './userRoute';
import citiesRouter from './routes/cities-router';

const apiRouter = express.Router();
apiRouter.use('/products',productRoute);
apiRouter.use('/users',userRoute);
apiRouter.use('/api/cities', citiesRouter);

export default apiRouter;
