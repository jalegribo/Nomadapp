import express from "express";
import {verifyUser,adminOnly} from '../middleware/AuthUser.js';
import courseController from "../controllers/courseController.js";
import { validateCourse } from "../middleware/validateCourse.js";
import { validateModule } from "../middleware/validateModulo.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Manejo de cursos
 */

/**
 * @swagger
 * /api/course/courses:
 *   get:
 *     summary: Obtener todos los cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos
 *       500:
 *         description: Error en el servidor
 */
router.get('/courses', courseController.getCourses);

/**
 * @swagger
 * /api/course/create-course:
 *   post:
 *     summary: Crear un nuevo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - descripcion
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post('/create-course', adminOnly, validateCourse, courseController.createCourse);

/**
 * @swagger
 * /api/course/get-course:
 *   post:
 *     summary: Obtener un curso por ID
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_course
 *             properties:
 *               id_course:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.post('/get-course', verifyUser, courseController.getCourseById);

/**
 * @swagger
 * /api/course/delete-course:
 *   delete:
 *     summary: Eliminar un curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_course
 *             properties:
 *               id_course:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Curso eliminado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/delete-course', verifyUser, courseController.deleteCourse);

/**
 * @swagger
 * /api/course/add-module:
 *   post:
 *     summary: Añadir un módulo a un curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_course
 *               - nombre
 *             properties:
 *               id_course:
 *                 type: integer
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Módulo añadido exitosamente
 *       500:
 *         description: Error en el servidor
 */
router.post('/add-module', validateModule, courseController.createModule);

export default router;
