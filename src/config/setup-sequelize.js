import dotenv from "dotenv";
import { Sequelize } from "sequelize";


dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});

const models = [];

sequelize.addModels(models);

export default sequelize;