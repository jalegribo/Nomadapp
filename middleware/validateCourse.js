import { check,validationResult } from "express-validator";

export const validateCourse = [
    check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    check('descripcion').notEmpty().withMessage('La descripción es obligatoria'),
    async (req, res, next) => {
        const errors = validationResult(req);
        try{
            if (!errors.isEmpty()) {
                return res.status(400).json({request: req.body, errors: errors.array() });
            }
            next();
        }catch(error){
            res.status(500).json({ message: error.message });
        }        
    }
];