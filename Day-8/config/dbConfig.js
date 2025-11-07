export const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "learningNodeJs",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
/*
export const dbConfig = {
  HOST: "roundhouse.proxy.rlwy.net", //HOST: "localhost",  //i.e xampp
  USER: "root",
  PASSWORD: "G-Eh11gG6hfgBGbAahbAb6ADBa2b1bC1", //PASSWORD: "",
  DB: "railway", //DB: " Je name rakhda bho phpmyadmin or xampp bhitra"
  dialect: "mysql", //dialect: " postgresh or sqlite or mongodb"  // je garda bho
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
*/

//Safe method
/*
1. Create a .env file (add to .gitignore):
DB_HOST=roundhouse.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=your_actual_password_here
DB_NAME=railway
*/
//2. Update your config to use environment variables:
/*
export const dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
*/

//3. Install and configure dotenv:
/*
npm install dotenv

*/
//4. In your main file (e.g., app.js/server.js):
/*
import dotenv from 'dotenv';
dotenv.config();

// Your other imports and code...
*/
