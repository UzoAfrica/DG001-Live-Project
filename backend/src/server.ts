import app from './app';
import appEnvironmentVariables from './config/appEnvironmentVariables.config';
import sequelize from './config/sequelize.config';

// Synchronize Database and start the server
sequelize
  .sync({ logging: false })
  .then(() => {
    console.log('Database synchronized successfully.');

    // Start API
    const port = appEnvironmentVariables.port || 5001;
    app.listen(port, () => {
      console.log(`Server listening at http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error(`Database synchronization error: ${error}`);
  });
