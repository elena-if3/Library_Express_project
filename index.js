require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.use(errorHandler);
app.use(notFoundHandler);

const bootstrap = async () => {
    await sequelize.authenticate();
    await sequelize.sync({
        alter: true,
    });
    app.listen(process.env.PORT, () => {
        console.log("App running on port", process.env.PORT);
    });
};

bootstrap();
