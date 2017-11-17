import Sequelize from 'sequelize';
export default sequelize =>
    sequelize.define('product', {
        name: Sequelize.STRING,
        brand: Sequelize.STRING,
        price: Sequelize.STRING,
        color: Sequelize.STRING,
        size: Sequelize.STRING,
    });
