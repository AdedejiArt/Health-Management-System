import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routers/index.js"
const app = express();

dotenv.config()
const port = process.env.PORT;

app.configure(function() {
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get("/", (req, res) => {
    res.render('./index.html')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Our HealthHub API is now available on port${port}`)
})