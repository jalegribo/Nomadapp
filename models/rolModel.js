import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rol = db.define('rol', {
    id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 20]
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 100]
        }
    },
}, {
    freezeTableName: true,
    timestamps: false
});




export default Rol;
