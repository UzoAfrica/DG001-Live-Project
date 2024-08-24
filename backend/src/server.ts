import "dotenv/config";
import sequelize from "./config/sequelize.config";
import app from "./index";

// Synchronize Database
sequelize
  .sync({ logging: false })
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error(`Synchronization error: ${error}`);
  });

// Start API
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
