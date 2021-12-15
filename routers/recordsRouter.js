import express from "express";
import {viewRecord, createRecord, deleteRecord} from "../controllers/recordsController.js";
import { authenticate } from "../middlewares/auth.js";
const recordsRouter = express.Router();

//view one record
recordsRouter.get('/:id',authenticate,  viewRecord)

//view records
//recordsRouter.get('/', authenticate, allRecords)

//crate a record
recordsRouter.post('/upload', createRecord)

//delete records
recordsRouter.delete('/:id',authenticate, deleteRecord)


export default recordsRouter;