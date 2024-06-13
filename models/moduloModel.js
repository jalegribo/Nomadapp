import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Curso from "./cursoModel.js";

const { DataTypes } = Sequelize;

const Modulo = db.define('modulo', {
    id_modulo: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_curso: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
             // Assuming Curso model is defined in another file
            key: 'id_curso'
        }
    },
    nombre_modulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 200]
        }
    },
    id_recursos: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'recursos', // Assuming recursos model is defined in another file
            key: 'id_recursos'
        }
    },
    id_comentario: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'comentario', // Assuming comentario model is defined in another file
            key: 'id_comentario'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Modulo;
