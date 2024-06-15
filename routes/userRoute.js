import express from 'express';
import UserController from '../controllers/UserController.js';
import { verifyUser } from '../middleware/AuthUser.js';
import { validateUser } from '../middleware/ValidateUser.js';
import { validateUpdateUser } from '../middleware/ValidateUpdateUser.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Manejo de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       500:
 *         description: Error en el servidor
 */
router.get('/users', verifyUser, UserController.getUsers);

/**
 * @swagger
 * /api/users/:
 *   post:
 *     summary: Obtener usuario por ID
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_usuario
 *             properties:
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.post('/users/', verifyUser, UserController.getUserById);

/**
 * @swagger
 * /api/Create-users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - tipo_dni
 *               - dni
 *               - fecha_nacimiento
 *               - email
 *               - telefono
 *               - codigo_postal
 *               - rol
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               tipo_dni:
 *                 type: string
 *               dni:
 *                 type: string
 *               fecha_nacimiento:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *               telefono:
 *                 type: string
 *               codigo_postal:
 *                 type: string
 *               rol:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Error en el servidor
 */

router.post('/Create-users', /*validateUser,*/ UserController.createUser);

/**
 * @swagger
 * /api/add-my-course:
 *   post:
 *     summary: Añadir curso a usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_curso
 *             properties:
 *               id_curso:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Curso añadido al usuario
 *       404:
 *         description: Usuario o curso no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.post('/add-my-course', verifyUser, UserController.addMyCourse);

/**
 * @swagger
 * /api/users/:
 *   patch:
 *     summary: Actualizar usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       400:
 *         description: Error en la actualización del usuario
 */
router.patch('/users/', verifyUser, validateUpdateUser, UserController.updateUser);

/**
 * @swagger
 * /api/users/:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Usuarios]
 *     responses:
 *       204:
 *         description: Usuario eliminado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/users/', verifyUser, UserController.deleteUser);


export default router;
