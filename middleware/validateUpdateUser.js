import { check, validationResult } from 'express-validator';


export const validateUpdateUser = [
  check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  check('apellido').notEmpty().withMessage('El apellido es obligatorio'),
  check('tipo_dni').notEmpty().withMessage('El tipo de DNI es obligatorio'),
  check('dni').notEmpty().withMessage('El DNI es obligatorio'),
  check('fecha_nacimiento').isDate().withMessage('Fecha de nacimiento no válida'),
  check('email').isEmail().withMessage('Correo electrónico no válido'),
  check('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
  check('codigo_postal').notEmpty().withMessage('El código postal es obligatorio'),
  check('rol').notEmpty().withMessage('El rol es obligatorio'),

  async (req, res, next) => {
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).json({request: req.body, errors: errors.array() });
      }
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];