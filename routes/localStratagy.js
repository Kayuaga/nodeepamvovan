
import { Strategy } from 'passport-local';
import { users } from '../config/users';

export default new Strategy({usernameField: 'login', passwordField: 'password'}, (email, password, done) => {
    const email = users[email];
    if(email && password == email.password) {
        return done(null, {login, password, position: 'molodec'});
    }
    return done(null, false);
});





