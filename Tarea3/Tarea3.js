import Contenedor from "./Tarea3Clases";

const contenedorPrueba = new Contenedor("productos.txt");

contenedorPrueba.save({ item: "azucar", price: 150 });
contenedorPrueba.save({ item: "fideos", price: 80 });
contenedorPrueba.save({ item: "gaseosa", price: 110 });

const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send("Tarea 3");
});

app.get("/productos", (req, res) => {
  res.send(contenedorPrueba.getAll());
});

app.get("/productoRandom", (req, res) => {
  res.send(contenedorPrueba.getRandomItem);
});
