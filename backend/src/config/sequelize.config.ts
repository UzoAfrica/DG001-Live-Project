import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URI as string, {
  dialect: "postgres",
  logging: () => (process.env.NODE_ENV === "dev" ? true : false),
});

export default sequelize;
