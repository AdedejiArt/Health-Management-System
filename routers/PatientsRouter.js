import express from "express";
import { addPatient,ViewPatient,ViewAllPatients , UpdatePatient ,deletePatient } from "../Controllers/PatientsController.js";
import { authenticate } from "../middlewares/auth.js";
const PatientRouter=express.Router();
//Get a Patient
PatientRouter.get("/",  ViewAllPatients);
PatientRouter.get("/:id",  ViewPatient);
PatientRouter.post("/",  addPatient);
PatientRouter.put("/",  UpdatePatient);
PatientRouter.delete("/:id",  deletePatient);




 

export default PatientRouter;