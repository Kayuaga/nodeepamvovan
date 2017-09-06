const {User,Product} = require('./model'),
    {name} = require('./config/config.json')
let user = new User(''),
    product = new Product();
console.log(name)