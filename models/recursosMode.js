import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Recursos = db.define('recursos', {
    id_recursos: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre_recurso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 30]
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 50]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Recursos;
