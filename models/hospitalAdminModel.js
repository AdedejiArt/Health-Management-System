import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Admin = sequelize.define('admin', {

    AdminID: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    Admin_Name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Admin_Contact: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    H_Password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    User_Type: {
        type: Sequelize.STRING(10),
        allowNull: false
    },

    Hospital_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }

}, {
    sequelize,
    tableName: 'hospital_admin',
    timestamps: false
});

export default Admin;