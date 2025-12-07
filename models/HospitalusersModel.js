import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.


const Hospital_users = sequelize.define('hospital_users', {
    Hospitalusers_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true

    },
    Hospital_Name: {
        type: Sequelize.STRING(255),
        allowNull: false,

    },
    emailaddress: {
        type: Sequelize.STRING(255),
        allowNull: false,

    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,

    }

}, {
    sequelize,
    tableName: 'hospital_users',
    timestamps: false
})

export default Hospital_users;
