import express from 'express';
import moviesControllers from '../controllers/moviesControllers.js';

const routes = express.Router();
routes.get('/', moviesControllers.getMovies);

routes.get('/:id', moviesControllers.getOneMovie);

routes.post('/', moviesControllers.addMovie);

routes.put('/:id', moviesControllers.updateMovie);

routes.delete('/:id', moviesControllers.deleteMovie);

export default routes;
