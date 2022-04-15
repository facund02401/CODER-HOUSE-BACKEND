const express = require('express');
const { Router } = express;

const app = express();
const products = Router();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const listaProductos = [];


products.get('/', (req, res) => {
   if(listaProductos.length === 0){
      res.send(` No hay productos cargados`)
   } else {res.send(listaProductos)}
   ;
});

products.get('/:id', (req, res) => {
   const { id } = req.params;
   const found = listaProductos.find(product => product.id === id);

   if(found){
      res.send(found);
   }else {
      res.send('El producto no existe');
   };
});

products.post('/', (req, res) => {
   let idProducto = 0
    const product = {
         id: idProducto++,
         product: req.body.item,
         price: req.body.price,
         img: req.body.imgUrl
    };
    listaProductos.push(product);  
    res.send(listaProductos);
 });

products.put('/:id', (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   const index = listaProductos.findIndex(product => product.id === id)
   
   if( index !== -1) {
      listaProductos[index] = changes;
      res.send(listaProductos[index]);
   }else {
      res.send('No existe producto con ese ID')
   };
 });

products.delete('/:id', (req, res) => {

  const { id } = req.params;
  const deleted = listaProductos.find(product => product.id === id);
  if(deleted){
     listaProductos = listaProductos.filter(product => product.id === id);
     res.send(`Se ha eliminado correctamente el siguiente producto: ${deleted}`)
  } else {
     res.send('El id ingresado no coincide con ningún producto');
  };
 });

app.use('/products', products);
app.use('/static', express.static('public'));

app.listen(PORT, () => {
   console.log(`Escuchando en esta uri http://localhost: ${PORT}`)
});
