import express from 'express';
import cookieParser from 'cookie-parser';
import cookies  from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import bodyParser from 'body-parser';
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
app.get('/api/products', (req, res) => {
   res.send(productMap)
});

app.get('/api/products/:id',(req,res) =>{
    console.log(req.params.id);
    res.send(productMap.get(Number(req.params.id))||{});
});

app.post('/api/products',(req,res)=>{
    id+=1;
    productMap.set(id,(req.body));
    res.send(productMap);

});
export default  app;