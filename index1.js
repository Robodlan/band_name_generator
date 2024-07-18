import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Reinaldo</h1>")
});






app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})