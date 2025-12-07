import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Appointment = sequelize.define('appointment', {

    Appointment_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    Hospital_Id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Appointment_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

 //   Appointment_Status: {
  //      type: Sequelize.STRING(20),
   //     allowNull: false
 //   },

    Patient_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    tableName: 'appointments',
    timestamps: false
});

export default Appointment;
