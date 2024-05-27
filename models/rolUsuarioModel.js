import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./Usuarios.js";
import Rol from "./Rol.js";

const { DataTypes } = Sequelize;

const RolUsuario = db.define('rol_usuario', {
    id_rol_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id_rol'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default RolUsuario;
