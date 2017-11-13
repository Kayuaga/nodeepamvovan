import express from 'express';
import cookieParser from 'cookie-parser';
import cookies  from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import authMiddle from './middlewares/passportAuthMiddle';
import passportLocal from './routes/localStratagy';
import bodyParser from 'body-parser';
import apiRouter from './routes/apiRouter'
import authRoute from './routes/authRoutes';
import session  from 'express-session';
import passport from 'passport';


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
app.use(session({ secret: '1q2w3e4r5t', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(passportLocal);

passport.serializeUser(function(user, done) {
    done(null, user.login);
});

passport.deserializeUser(function(login, done) {
    done(null, {login, password: 'password'});
});

app.post('/auth', passport.authenticate('local'), (req, res) => { res.json(req.user)});

app.get('/',(req,res)=>{
    console.log(req.parsedCoockie)
    console.log(req.parsedQuery);
})

app.use('/api',authMiddle,apiRouter);

export default  app;