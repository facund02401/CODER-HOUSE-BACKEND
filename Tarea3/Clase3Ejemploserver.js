// LEVANTAR SERVIDOR CON HTTP EN NODE

const http = require("http");

const server = http.createServer((peticion, respuesta) => {
  console.log("Llego evento");
  respuesta.end("Hola mundo");
});

const connectedServer = server.listen(8080, () => {
  console.log( 
    `Servidor HTTP escuchado en el puerto ${connectedServer.address().port}`
  );
});
