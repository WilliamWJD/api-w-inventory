import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import { CreateHostController } from '../controllers/CreateHostController';
import { ImportHostsController } from '../controllers/ImportHostsController';
import { ListAllHostsController } from '../controllers/ListAllHostsController';

const routes = Router();
const upload = multer(uploadConfig);

const createHostController = new CreateHostController();
const importHostsController = new ImportHostsController();
const listAllHostsController = new ListAllHostsController();

routes.post('/hosts', createHostController.handle);
routes.get('/hosts', listAllHostsController.handle);

routes.post('/import/hosts', upload.single('hosts-file'), importHostsController.handle)

export { routes }