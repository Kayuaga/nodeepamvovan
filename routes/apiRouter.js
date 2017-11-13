import express from 'express';
import productRoute from './productRoutes';
import userRoute from './userRouteRoutes';

const apiRouter = express.Router();
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);

export default apiRouter;
