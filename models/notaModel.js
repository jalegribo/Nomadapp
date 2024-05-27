import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./Usuarios.js";
import Evaluacion from "./Evaluacion.js";

const { DataTypes } = Sequelize;

const Nota = db.define('nota', {
    id_nota: {
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
    },
    evaluacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Nota;
