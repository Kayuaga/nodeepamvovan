
import { Strategy } from 'passport-local';
import  users  from '../config/users';
import userController from '../models/users';
import ConnectionDao from '../dao/connectionDao';
const sequelizer = ConnectionDao();
const userse = userController(sequelizer);

export default new Strategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
    let returningData = [null,false];
    userse.findOne({
        where: {
            email: email,
        }
    }).then(user => {
        if(user){
           // console.log(user);
            const { dataValues } = user;
            console.log(dataValues)
             returningData = dataValues.password == password ? [null,dataValues.email] : returningData;
        }
        done(...returningData);

    });

});





