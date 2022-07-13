import mongoose from 'mongoose'

const AdminSesionSchema = mongoose.Schema( {
  usuario:{
    type: mongoose.Schema.Types.ObjectID,
    ref:'AdminUsuario',
    required: true,
  },
  profesional:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'AdminUsuario',
    required: true,
  },
  agendada: {
    type: Boolean,
    required: true,
    default: false,
  },
  confirmada: {
    type: Boolean,
    required: true,
    default: false,
  },
  realizada: {
    type: Boolean,
    required: true,
    default: false,
  },
  pagada: {
    type: Boolean,
    required: true,
    default: false,
  },
  boleteada: {
    type: Boolean,
    required: true,
    default: false,
  },
  fecha:{
    type: Date,
  }
})

export default mongoose.Schema.AdminSesion || mongoose.Schema( 'AdminSesion', AdminSesionSchema )