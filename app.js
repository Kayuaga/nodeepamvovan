import express from 'express';
import cookieParser from 'cookie-parser';
import cookies  from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import authMiddle from './middlewares/authMiddle';
import passportLocal from './middlewares/localStratagy';
import bodyParser from 'body-parser';
import productRoute from './routes/productRoutes';
import userRoute from './routes/userRoute';
import authRoute from './routes/authRoutes';


const productMap = new Map();
let id =1 ;
const product = {
    name: 'Supreme T-Shirt', brand: 'Supreme',
    price: 99.99,
    options: [
        { color: 'blue' },
        { size: 'XL' } ]
}

productMap.set(id,product);

const app = express();
app.use(cookieParser());
app.use(cookies);
app.use(queryParser);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.parsedCoockie)
    console.log(req.parsedQuery);
})
//app.use('/api',middle)
//app.use(authRoute)
//app.use('/api',authMiddle);
app.use('/auth',passportLocal)
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);


export default  app;