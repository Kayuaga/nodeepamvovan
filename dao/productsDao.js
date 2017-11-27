import Product from '../mongo/models/product';
const head = { "jsonHead":{ "Content-Type": "application/json" }};
export default class ProductsController {
    getProducts = (req, res) => {
        res.writeHead(200, head.jsonHead);

        Product.find({}, (error, products) => {
            res.write(JSON.stringify(products));
            res.end();
        });
    }

    getProduct = (req, res) => {
        const productId = req.params.id;

        res.writeHead(200, head.jsonHead);

        Product.findById(productId, (error, product) => {
            res.write(JSON.stringify(product));
            res.end();
        });
    }

    postProduct = (req, res) => {
        res.writeHead(200, head.jsonHead);

        Product({
            name: req.body.name
        }).save((error, product) => {
            res.write(JSON.stringify(product));
            res.end();
        });
    }

    deleteProduct = (req, res) => {
        const productId = req.params.id;

        res.writeHead(200, head.jsonHead);

        Product.remove({ _id: productId }, (error) => {
            res.end();
        });
    }

    updateProduct = (req, res) => {
        const productId = req.params.id;

        res.writeHead(200, head.jsonHead);

        Product.findById(productId, (error, product) => {
            product.name = req.body.name;

            product.save((error, product) => {
                res.write(JSON.stringify(product));
                res.end();
            })
        });
    }
}
