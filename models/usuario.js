const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({


    idrol: {
        type: Number,
        unique: true,
        required: true,
      },
      nombrerol: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
      },
      descrol: {
        type: String,
        unique: true,
        required: true
    
      }
})

//Exportar la función UsuarioSchema
module.exports = model('Usuario',UsuarioSchema)

