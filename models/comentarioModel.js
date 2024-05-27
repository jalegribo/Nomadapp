import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./Usuarios.js";

const { DataTypes } = Sequelize;

const Comentario = db.define('comentario', {
    id_comentario: {
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
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 200]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Comentario;
