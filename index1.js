import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
// import morgan from "morgan";
const _dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})