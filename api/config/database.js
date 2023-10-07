const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect("mongodb+srv://fdamian:fdamian@cluster0.apehqqr.mongodb.net/techapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // strictQuery: false,
    });
    console.log(`MongoDB Database connected with HOST: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Re-lanza el error para que pueda ser manejado en la llamada a esta función
  }
};

module.exports = connectDatabase;
