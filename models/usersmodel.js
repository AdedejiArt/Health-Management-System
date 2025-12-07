import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const User=sequelize.define('users',{
User_id:{
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true

},
fullname:{
    type:Sequelize.STRING(255),
    allowNull:false,

},emailaddress:{
    type:Sequelize.STRING(255),
    allowNull:false,

},password:{
    type:Sequelize.STRING(255),
    allowNull:false,

} 

},{
    sequelize,
    tableName:'users',
    timestamps:false
})

export default User;