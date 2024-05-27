import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Evaluacion = db.define('evaluacion', {
    id_evaluacion: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    evaluacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nota: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Evaluacion;
