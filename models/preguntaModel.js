import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Preguntas = db.define('preguntas', {
    id_preguntas: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    pregunta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    respuesta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    notaPregunta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Preguntas;
