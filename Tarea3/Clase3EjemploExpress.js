const express = require("express");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Servidor HTTP escuchado en el puerto ${server.address().port}`
  );
});

app.get("/", (req, res) => {
  res.send('Hola mundo');
});
app.get("/llegada", (req, res) => {
  res.send('Llegue mundo');
});
