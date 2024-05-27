import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./Usuarios.js";
import Evaluacion from "./Evaluacion.js";

const { DataTypes } = Sequelize;

const EvaluacionUsuario = db.define('evaluacion_usuario', {
    id_evaluacion_usuario: {
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
    id_evaluacion: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Evaluacion,
            key: 'id_evaluacion'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default EvaluacionUsuario;
