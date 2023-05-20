const mongoose = require("mongoose");

const postulacionEsquema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      autopopulate:true
    },
    descripcion: {
      type: String,
      require: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Postulacion",
  }
);

module.exports = mongoose.model("Postulacion", postulacionEsquema);