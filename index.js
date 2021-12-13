import express from "express";
import path from "path";
const __dirname = path.resolve();
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js";
import cors from "cors";



const app = express();

dotenv.config()
const port = process.env.PORT;



const publicDirectory = path.join(__dirname, './public/')
app.use(express.static(publicDirectory))
    // app.use("/css", express.static(__dirname + "/css"));
    // app.use("/fonts", express.static(__dirname + "/fonts"));
    // app.use("/img", express.static(__dirname + "/img"));
    // app.use("/plugins", express.static(__dirname + "/plugins"));
app.set('view engine', 'hbs')





app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

//  app.get('/patient/:id', function (req, res, next) {
//      res.json({ msg: 'This is CORS-enabled for all origins!' })
//  })
// app.get('/adminRouter/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })
// app.get('/hospital/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })
// app.get('/appointment/:id', function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })
//app.get('/router/:id', function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for all origins!' })
//})



app.listen(port, () => {
    console.log(`Our HealthHub API is now available on port${port}`)
})