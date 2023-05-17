const mongoose = require("mongoose");

const usuarioEsquema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido: { 
      type: String,
       require: true 
      },
    contrasenia:{
      type:String,
      validate:[
        function(contrasenia){
          return contrasenia.length >=8;
        },
        'La contraseña debe tener mas de 8 caravteres'
      ]
    },
    edad: { 
      type: Number, 
      require: true 
    },
    descripcion: { 
      type: String, 
      default: `Agregue una breve descripcion para su perfil`
    },
    rol: {
      type:String,
      enum:['Administrador','Contratista','Trabajador']
    },
    email: { 
      type: String,
       require: true 
      },
    departamento: { 
      type: String, 
      require: true 
    },
    municipio: { 
      type: String, 
      require: true 
    },
    direccion: { 
      type: String, 
      require: true 
    },
  },
  {
    collection: "Usuario",
  }
);

module.exports = mongoose.model("Usuario", usuarioEsquema);
