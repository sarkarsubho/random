const express = require("express");
const B2CProductController=require("./controllers/B2CProduct.controller")
const app = express();

app.use(express.json());

app.use("/B2C/products",B2CProductController)

module.exports = app;
