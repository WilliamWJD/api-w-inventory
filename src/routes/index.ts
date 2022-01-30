import { Router } from 'express';
import { CreateHostController } from '../controllers/CreateHostController';

const routes = Router();

const createHostController = new CreateHostController();

routes.post('/hosts', createHostController.handle);

export { routes }