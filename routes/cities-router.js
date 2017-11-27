import express from 'express';
import CitiesController from '../controllers/citiesController';

const controller = new CitiesController();
const citiesRouter = express.Router({mergeParams: true});

citiesRouter.get('/', controller.getCities);
citiesRouter.get('/random', controller.getRandomCity);
citiesRouter.get('/:id', controller.getCity);
citiesRouter.post('/', controller.postCity);
citiesRouter.put('/:id', controller.updateCity);
citiesRouter.delete('/:id', controller.deleteCity);

export default citiesRouter;