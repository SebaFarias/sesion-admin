import mongoose from 'mongoose'

const adminUsuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

},{
  timestamps: true,
  versionKer: false,
})

export default mongoose.model( 'AdminUsuario', adminUsuarioSchema )