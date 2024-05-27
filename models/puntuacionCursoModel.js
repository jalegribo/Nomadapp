import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Curso from "./Curso.js";
import Usuario from "./Usuarios.js";

const { DataTypes } = Sequelize;

const PuntuacionCurso = db.define('puntuacion_curso', {
    id_puntuacion: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_curso: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Curso,
            key: 'id_curso'
        }
    },
    id_usuario: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    puntuacion_curso: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default PuntuacionCurso;
