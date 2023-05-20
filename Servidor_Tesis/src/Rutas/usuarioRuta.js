const express = require('express');
const usuarioControlador =require('../Controladores/usuarioControlador');
const usuarioRuta= express.Router();

usuarioRuta.post("/usuario", usuarioControlador.registro);

module.exports=usuarioRuta;