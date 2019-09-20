const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Primeira rota
app.use('/api', require("./src/routes"));

app.listen(3001);