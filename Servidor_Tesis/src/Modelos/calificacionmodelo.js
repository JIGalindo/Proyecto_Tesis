const mongoose = require("mongoose");

const calificacionEsquema = mongoose.Schema(
  {
    usuarioCalificado:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        autopopulate:true
    },
    usuarioQueCalifica:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        autopopulate:true
    },
    puntuacion: {
      type: number,
      require: true,
    },
    comentario :{ 
      type: String,
      },
    
    fecha:{
        type:Date,
        default:Date.now
    }
  },
  {
    collection: "Calificacion",
  }
);

module.exports = mongoose.model("Calificacion", calificacionEsquema);