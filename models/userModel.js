import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('usuario', {
    id_usuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 40]
        }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 40]
        }
    },
    tipo_dni: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 30]
        }
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 15]
        }
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 20]
        }
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 15]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Users;
