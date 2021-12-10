import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js"
const app = express();

dotenv.config()
const port = process.env.PORT;


app.get("/", (req, res) => {
    res.json('jdjdjd')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Our HealthHub API is now available on port${port}`)
})