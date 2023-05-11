const mongoose = require("mongoose");

const usuarioEsquema = mongoose.Schema(
  {
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    edad: { type: Number, require: true },
    descripcion: { type: String, require: true },
    email: { type: String, require: true },
    departamento: { type: String, require: true },
    municipio: { type: String, require: true },
    direccion: { type: String, require: true },
    rol:{type:mongoose.Schema.Types.ObjectId,ref:"Rol"},
  },
  {
    collection: "Usuario",
  }
);

module.exports = mongoose.model("Usuario", usuarioEsquema );
