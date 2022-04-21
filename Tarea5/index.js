const express = require('express');
const { Router } = express;
const { engine } = require('express-handlebars');

const app = express();
const products = Router();
const port = 8080;

app.engine(
   'hbs', 
   engine({
      extname: '.hbs',
      defaultLayout: 'index.hbs',
      layoutsDir: __dirname + '/views/layouts/',
      partialsDir: __dirname + '/views/partials'
}));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const productsList = [{
   id: 'prueba',
   product: 'prueba',
   price: 'xxx',
   img: 'https://cdn1.iconfinder.com/data/icons/space-flat-galaxy-radio/512/starship-256.png',
}];



products.get('/', (req, res) => {
   if(productsList.length === 0){
      res.send(` Aún no hay productos cargados`)
   } else {res.render('products', {productsList: productsList})}
   ;
});

products.get('/form', (req, res) => {
   res.render('form');
});

app.post('/form', (req, res) => {
   const generateNewId = () =>{
      let idIndex = Math.floor(Math.random() * 9999) +1;
      if (Object.keys(productsList).includes(idIndex) == idIndex) {
          idIndex = generateNewId();
      };
      return idIndex;
   };
    const product = {
         id: generateNewId(),
         product: req.body.item,
         price: req.body.price,
         img: req.body.imgUrl
    };
    productsList.push(product);  
    res.send(productsList);
    console.log(productsList)
 });


app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/products', products);

app.listen(port, () => {
   console.log(`Escuchando en esta uri http://localhost: ${port}`)
});
