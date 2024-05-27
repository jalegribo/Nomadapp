import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Permisos = db.define('permisos', {
    id_permisos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_permiso: {
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
            len: [0, 100]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Permisos;
