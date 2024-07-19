import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

const logger = (req, res, next) => {
    console.log(req.body);
   bandName = req.body["street"] + req.body["pet"]
  next();
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html")
});

app.post("/submit", (req, res) => {
   res.send(`
    <h1>Your Band Name is</h1>
    <h2>${bandName}</h2>`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})