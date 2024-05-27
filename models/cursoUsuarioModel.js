import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./Usuarios.js";
import Curso from "./Curso.js";

const { DataTypes } = Sequelize;

const CursoUsuario = db.define('curso_usuario', {
    id_curso_usuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    id_curso: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Curso,
            key: 'id_curso'
        }
    },
    nombre_curso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default CursoUsuario;
    