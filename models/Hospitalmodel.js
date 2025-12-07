import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const Hospital=sequelize.define('hospital',{
Hosital_Id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true

},
Hospital_Name:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Hospital_Contact:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Hospital_Location:{
    type:Sequelize.STRING(100),
    allowNull:false,

},No_of_Beds:{
    type:Sequelize.INTEGER,
    allowNull:false,

},Hospital_Department:{
    type:Sequelize.STRING(30),
    allowNull:false,

}

},{
    sequelize,
    tableName:'hospital',
    timestamps:false
})

export default Hospital