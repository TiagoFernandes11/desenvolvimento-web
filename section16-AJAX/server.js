import express from "express";
import bodyParser from "body-parser";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/teste", (req, res) => res.send("<h1>Ok</h1>"));

app.get("/parOuImpar", (req, res) =>{
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? "<h1>Par</h1>" : "<h1>Impar</h1>"
  })
})

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }
    res.end("Concluido com sucesso");
  });
});

app.post("/formulario", (req,res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.listen(3000, () => console.log("Server funcionando na porta 3000"));
