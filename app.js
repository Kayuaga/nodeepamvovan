import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser());
app.use((req,res,next)=> {
})
export default  app;