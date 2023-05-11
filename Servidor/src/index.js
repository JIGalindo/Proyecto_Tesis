const express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Permisos de cors
app.use(
  cors({
    origin: "*",
  })
);
//coneccion a la base de datos\
app.listen(5000, () => console.log("App escuchado en el puerto 5000"));
mongoose
  .connect(
    "mongodb+srv://israelalcantara50:Galindo0298@cluster0.dvqdgqd.mongodb.net/ProyectoTesisDB?retryWrites=true&w=majority"
  )
  .catch((error) => handleError(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/");

app.get("/", function (req, res) {
  res.send("Inicio de Aplicacion");
});
