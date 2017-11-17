import express from 'express'
import ConnectionDao from '../dao/connectionDao';
import productController from '../controllers/productController'
import userController from '../models/users'
const sequelizer = ConnectionDao();
const product = productController(sequelizer);
const users = userController(sequelizer);


const productRoute = express.Router();

// const productMap = new Map();
// const con = new C
// let id = 1;
// const product = {
//     name: 'Supreme T-Shirt', brand: 'Supreme',
//     price: 99.99,
//     options: [
//         {color: 'blue'},
//         {size: 'XL'}]
// };
// productMap.set(id,product)


productRoute.get('/', (req, res) => {
    product.findAll().then(product => {
        users.findAll().then(user => {
            res.send(Object.assign({data:[{ ...product},{...user}]}))
        });
    });

});

productRoute.get('/:id', (req, res) => {
    product.findOne({
        where: {
            id: req.params.id,
        }
    }).then(product => res.send(product || {}))

});

productRoute.post('/', (req, res) => {
    id += 1;
    productMap.set(id, (req.body));
    res.send(productMap);
});


export default productRoute;