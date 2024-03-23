import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/teste", (req, res) => res.send("<h1>Ok</h1>"))

app.listen(3000, () => console.log("Server funcionando na porta 3000"))