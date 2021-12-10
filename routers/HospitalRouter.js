import express from "express";
import { addHospital,ViewAllHospital,ViewHospital,UpdateHospital,deleteHospital } from "../Controllers/HospitalController.js";
import { authenticate } from "../middlewares/auth.js";

const HopsitalRouter=express.Router();

//Add a hospital           hospital/
HopsitalRouter.post("/", addHospital );


//View a hospital         hospital/:id
HopsitalRouter.get("/:id", ViewHospital);


//View all hospitals       hospital/
HopsitalRouter.get("/", ViewAllHospital);


//Update Hospital record  hospital/:id
HopsitalRouter.put("/",  UpdateHospital);


//Delete a hospital       hospital/:id  
HopsitalRouter.delete("/:id", deleteHospital);


export default HopsitalRouter;