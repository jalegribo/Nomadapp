import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Usuario from "./userModel.js";

const { DataTypes } = Sequelize;

const LoginUser = db.define('login_user', {
    id_login_user: {
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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 20]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default LoginUser;
