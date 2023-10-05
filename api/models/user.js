const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'Please enter your name'],
    trim: true,
  },
  email: {
    type: String,
    trim: true,

  },

  password: {
    type: String,
    trim: true,
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  role: {
    type: String,
    default: "usuario",
    enum: {
      values: [
        'admin', 'usuario', 'invitado'
      ]
    }
  },

  isBan: {
    type: Boolean,
    default: false
  },

  address: {
    type: String,
    trim: true,
  },

  phone: {
    type: Number,
    trim: true,
  },

  misFavoritos: [String],

  misCompras: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('User', userSchema);
