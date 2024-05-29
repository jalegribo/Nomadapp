import express from 'express';
import UserController from '../controllers/UserController.js';
import {verifyUser} from '../middleware/AuthUser.js';
import { validateUser } from '../middleware/ValidateUser.js';

const router = express.Router();

router.get('/users',verifyUser , UserController.getUsers);
router.get('/users/:id', verifyUser, UserController.getUserById);
router.post('/users',validateUser, UserController.createUser);
router.put('/users/:id',verifyUser , UserController.updateUser);
router.delete('/users/:id', verifyUser, UserController.deleteUser);

export default router;