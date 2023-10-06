const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database.js');

//* Setting up config file
dotenv.config({ path: 'api/config/.env' });

async function startServer() {
  try {
    //* Connecting to DB
    await connectDatabase();

    app.listen(process.env.PORT, () => {
      console.log(
        `Server started on PORT :${process.env.PORT} in ${process.env.NODE_ENV} mode`
      );
    });
  } catch (error) {
    console.error('Error:', error);
    process.exit(1); // Termina la aplicación con un código de error
  }
}

startServer();
