import { dbConfig } from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import { userModel } from "./userModel.js";
import { blogModel } from "./blogModel.js";

// Database connection with sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: 3306, //mysql port number by default 3306

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Authentication
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

export const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importing model files - using ES6 imports
db.blogs = blogModel(sequelize, DataTypes);
db.users = userModel(sequelize, DataTypes);

// Sync database
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});
