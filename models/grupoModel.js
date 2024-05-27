import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Curso from "./Curso.js";
import Usuario from "./Usuarios.js";

const { DataTypes } = Sequelize;

const Grupo = db.define('grupo', {
    id_grupo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_curso: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Curso,
            key: 'id_curso'
        }
    },
    id_usuario: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    semestre_curso: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 20]
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Grupo;
