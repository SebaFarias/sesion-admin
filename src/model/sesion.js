import mongoose from 'mongoose'
import usuarioModel from '/.usuario'

const AdminSesionSchema = mongoose.Schema( {
  profesional:{
    type: usuarioModel,
    
  }

})

export default mongoose.Schema( 'AdminSesion', AdminSesionSchema )