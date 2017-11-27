import express from 'express';
import UsersController from '../controllers/usersController';

const controller = new UsersController();
const usersRouter = express.Router({mergeParams: true});

usersRouter.get('/', controller.getUsers);
usersRouter.delete('/:id', controller.deleteUser);

export default userRoute;