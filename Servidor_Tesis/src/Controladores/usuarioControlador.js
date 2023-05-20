const usuarioModelo= require('../Modelos/usuarioModelo')

exports.registro = async (req,res)=>{
    const content =req.body.content;
    try {
        const usuario = await usuarioModelo.create()
    } catch (error) {
        
    }
}

function registro(req,res){
    const usuario = new usuarioModelo({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        edad:req.body.edad,
        descripcion:req.body.descripcion,
        email:req.body.email,
        departamento:req.body.departamento,
        municipio:req.body.municipio,
        direccion:req.body.direccion,
    });
    usuario.save(function (error, usuario) {
        if (error) {
            res.status(500).send("no se pudo crear tu usuario");           
        }else {
            res.status(200).json(usuario)
        }
    });
}

module.exports={
    registro,
}