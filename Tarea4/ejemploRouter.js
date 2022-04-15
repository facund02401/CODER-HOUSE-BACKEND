const express = require('express');
const { Router } = express;

const app = express();
const routerAutos = Router();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));




routerAutos.get('/', (req, res) => {
    res.json({ mensaje: 'recibi get reouter autos'})
   
});

routerAutos.post('/', (req, res) => {
    res.json({ mensaje: 'recibi POST reouter autos'})
   
});

app.use('/api/autos', routerAutos)

app.listen(PORT, () => {
   console.log(`Escuchando en esta uri http://localhost: ${PORT}`)
});
