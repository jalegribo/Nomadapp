import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Modulo from "./moduloModel.js";

const { DataTypes } = Sequelize;

const Curso = db.define('curso', {
    id_curso: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre_curso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 200]
        }
    },
    puntuacion_curso: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


export default Curso;
