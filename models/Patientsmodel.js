import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const Patient=sequelize.define('patients',{
Patients_id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true

},
Patients_FirstName:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patients_LastName:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patients_EmailAddress:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patient_Password:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patient_Location:{
    type:Sequelize.STRING(255),
    allowNull:false,

}

},{
    sequelize,
    tableName:'patients',
    timestamps:false
})

export default Patient;