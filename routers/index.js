import express from "express";
import HopsitalRouter from "./HospitalRouter.js";
import PatientRouter from "./PatientsRouter.js";
import adminRouter from "./hospitalAdminRouter.js";
import appointmentRouter from "./appointmentsRouter.js";
import usersRouter from "./usersRouter.js";
import pagesrouter from "./pages.js";

import HospitalusersRouter from "./hospitaluserRouter.js"

import recordsRouter from "./recordsRouter.js";


const router = express.Router();



router.use('/', pagesrouter);
router.use("/users", usersRouter);
router.use("/hospital", usersRouter);
router.use("/hospitalusers", HospitalusersRouter);
router.use("/appointment",appointmentRouter)
router.use("/records",recordsRouter);


// router.use("/hospital", HopsitalRouter);
// router.use("/patient", PatientRouter);
// router.use("/adminRouter",adminRouter);
//router.use("/appointment",appointmentRouter);
//router.use("/users",usersRouter);





export default router;