const mongoose = require('mongoose');

const rolEsquema = mongoose.Schema(
    {
        descripcion:{ type: String, require: true },
    },
    {
        collection: 'Rol'
    }
)

module.exports=mongoose.model('Rol',rolEsquema);