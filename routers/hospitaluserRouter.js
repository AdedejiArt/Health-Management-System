import express from "express";
import { addHospitaluser, ViewUser, ViewAllUsers, SignIn } from "../Controllers/Hospitalusercontroller.js";
import pagesrouter from "./pages.js";
import { authenticate } from "../middlewares/auth.js";

const HospitalusersRouter = express.Router();
//Add a user ----Sign Up
HospitalusersRouter.post("/doctor-register", addHospitaluser);
//Add a user ------Sign In
HospitalusersRouter.post("/signin", SignIn);
// //View a User ------
// usersRouter.get("/:id", authenticate,   ViewUser);
// //View All Users
// usersRouter.get("/", authenticate, ViewAllUsers);

export default HospitalusersRouter;