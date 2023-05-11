const mongoose = require("mongoose");

const ofertaEsquema = mongoose.Schema(
  {
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    direccion: { type: String, require: true },
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:"Usuario"},

  },
  {
    collection: "Oferta",
  }
);

module.exports = mongoose.model("Oferta", ofertaEsquema );