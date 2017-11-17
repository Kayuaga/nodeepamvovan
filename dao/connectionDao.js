import Sequelize from 'sequelize';
const con = "postgres://postgres:root@localhost:5432/nodejs";

export default (database='nodejs', login = 'postgres', password = 'root') => {
    const sequelize = new Sequelize(database, login, password, {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });
    sequelize.authenticate();
    return sequelize
}
