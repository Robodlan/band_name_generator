import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const bandName = "";

const logger = (req, res, next) => {
  console.log("request method", req.method);
  console.log("request url", req.url);
  next();
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html")
});

app.post("/submit", (req, res) => {
   console.log(req.body);
   res.send(`
    <h1>Your Band Name is</h1>
    <h2>${req.body.street}${req.body.pet}</h2>`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})