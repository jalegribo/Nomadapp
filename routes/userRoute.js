import express from 'express';
import UserController from '../controllers/UserController.js';
import {verifyUser} from '../middleware/AuthUser.js';
import { validateUser } from '../middleware/ValidateUser.js';
import { validateUpdateUser } from '../middleware/ValidateUpdateUser.js';

const router = express.Router();

router.get('/users',/*verifyUser,*/UserController.getUsers);
router.post('/users/', /*verifyUser,*/ UserController.getUserById);
router.post('/Create-users',/*validateUser*/ UserController.createUser);
router.patch('/users/',/*verifyUser,*//*validateUpdateUser*/UserController.updateUser);
router.delete('/users/', /*verifyUser,*/ UserController.deleteUser);

export default router;