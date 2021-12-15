import express from "express";
import HopsitalRouter from "./HospitalRouter.js";
import PatientRouter from "./PatientsRouter.js";
import adminRouter from "./hospitalAdminRouter.js";
import appointmentRouter from "./appointmentsRouter.js";
import usersRouter from "./usersRouter.js";
import pagesrouter from "./pages.js";

const router=express.Router();


router.use('/',pagesrouter);
router.use("/users",usersRouter);
router.use("/appointment",appointmentRouter)
//router.use("/appointment",appointmentRouter);

// router.use("/hospital", HopsitalRouter);
// router.use("/patient", PatientRouter);
// router.use("/adminRouter",adminRouter);
//router.use("/appointment",appointmentRouter);
//router.use("/users",usersRouter);





export default router;