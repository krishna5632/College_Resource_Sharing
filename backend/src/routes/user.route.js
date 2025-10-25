import Router from 'express'
import {registerUser} from '../controllers/auth.controller.js'
import {profileUpload} from '../middlewares/multer.middleware.js'

const router = Router(); 

router.route('/register').post(
    profileUpload.single('avatar'),  // Specify which field will contain the file
    registerUser
);

export default router