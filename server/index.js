require("dotenv").config(); //for access .env
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");

const PORT = process.env.PORT || 5000; // get  port from .env
const app = express();
app.use(cors()); //чтобы могли  отправлять данные с браузера
app.use(express.json()); //чтобы приложение могло парсить json формат

//создаем первый GET метод
/* app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Working!!!" });
}); */

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
