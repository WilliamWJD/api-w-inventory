import multer from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp')

export default {
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(req, file, cb) {
            const fileHash = crypto.randomBytes(10).toString('hex')
            const fileName = `${fileHash}-${file.originalname}`;
            return cb(null, fileName)
        }
    })
}