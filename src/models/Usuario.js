import mongoose from 'mongoose'

const adminUsuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

},{
  timestamps: true,
  versionKey: false,
})

export default mongoose.model( 'AdminUsuario', adminUsuarioSchema )