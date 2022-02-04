import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import { CreateHostController } from '../controllers/CreateHostController';
import { ImportHostsController } from '../controllers/ImportHostsController';

const routes = Router();
const upload = multer(uploadConfig);

const createHostController = new CreateHostController();
const importHostsController = new ImportHostsController();

routes.post('/hosts', createHostController.handle);

routes.post('/import/hosts', upload.single('hosts-file'), importHostsController.handle)

export { routes }