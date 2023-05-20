const mongoose = require("mongoose");

const empleoEsquema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      autopopulate:true
    },
    Titulo: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
      require: true,
    },
    direccion: {
      type: String,
      require: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    Estatus: {
      type: String,
      enum: ["Contratando", "expirado"],
    },
    postulaciones:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Postulacion",
        autopopulate:true
      }
    ]
  },
  {
    collection: "Empleo",
  }
);

module.exports = mongoose.model("Empleo", empleoEsquema);
