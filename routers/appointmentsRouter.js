import express from "express";
import {createAppt,viewAllAppointments, deleteAppointment, acceptAppointment} from "../Controllers/appointmentsController.js";  //accept an appointment
import { authenticate } from "../middlewares/auth.js";
const appointmentRouter = express.Router();

appointmentRouter.post('/appt',createAppt)

//view all appts
appointmentRouter.get('/', authenticate,  viewAllAppointments)   //are we using auth here?

//delete appt
appointmentRouter.delete('/:id', authenticate,    deleteAppointment)

//accept appt
appointmentRouter.put('/:id',authenticate, acceptAppointment)

export default appointmentRouter;