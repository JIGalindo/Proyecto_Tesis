const express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv=  require("dotenv");

//rutas
const usuarioRuta =require('./Rutas/usuarioRuta')

dotenv.config();
//Permisos de cors
app.use(
  cors({
    origin: "*",
  })
);
//coneccion a la base de datos\
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(()=>{
    console.log(`mongodb conectado ${process.env.PORT}`)
  })
  .catch((error) => handleError(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api",usuarioRuta)


//app.use("/");
app.get("/", function (req, res) {
  res.send("Inicio de Aplicacion");
});
