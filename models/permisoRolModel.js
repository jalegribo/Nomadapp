
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Rol from "./Rol.js";
import Permisos from "./Permisos.js";

const { DataTypes } = Sequelize;

const PermisosRol = db.define('permisos_rol', {
    id_permisos_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id_rol'
        }
    },
    id_permisos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permisos,
            key: 'id_permisos'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default PermisosRol;
