const fs = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
    this.productos = [];
    this.idProducto = 0;
  }

  save(prod) {
    this.idProducto++;
    prod.id = this.idProducto;
    this.productos.push(prod);
    try {
      fs.promises.writeFile(this.ruta, JSON.stringify(this.productos));
      console.log(`Id asignado: ${prod.id}`);
      console.log("Producto guardado");
    } catch (err) {
      console.log(err);
      console.log("Error en el guardado");
    }
  }

  async getById(idNumber) {
    fs.promises
      .readFile(this.ruta, "utf-8")
      .then((data) => {
        this.productos = JSON.parse(data);
        const productoPorId = this.productos.find(
          (producto) => producto.id === idNumber
        );
        console.log(productoPorId);
      })
      .catch((err) => console.log(err));
  }

  getAll() {
    try {
      const datos = fs.promises.readFile(this.ruta, "utf-8");
      this.productos = JSON.parse(datos);
      console.log(this.productos);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteById(idABorrar) {
    try {
      const data = await fs.promises.readFile(this.ruta, "utf-8");
      this.productos = JSON.parse(data);
      const productoPorId = this.productos.filter(
        (producto) => producto.id != idABorrar
      );
      this.productos = productoPorId;
      fs.promises.writeFile(this.ruta, JSON.stringify(productoPorId));
      console.log(`Producto con el id: ${idABorrar}, ha sido eliminado`);
    } catch (err) {
      console.log(err);
    }
  }

  deleteAll() {
      // PRIMER INTENTO, no funciona, al sobreescribir no lo hace correctamente
 //     try {
 //     this.productos = []
 //       console.log(JSON.stringify(this.productos))
 //       this.productos = JSON.stringify(this.productos)
 //       console.log(this.productos)
 //     fs.promises.readFile(`./${this.ruta}`, "utf-8");
 //     fs.writeFileSync(this.ruta, this.productos);
 //     console.log("Todos los productos fueron eliminados");
 //   } catch (err) {
 //     console.log(err);
 //   }

 fs.promises.readFile(this.ruta, 'utf-8')
        .then(content => {
           
            this.productos = [];
           
            try { fs.promises.writeFile(this.ruta, this.productos)
                console.log('Se eliminaron los productos.')
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!', err)
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})
  }
}

const prueba = new Contenedor("productos.txt");
//try{
//    prueba.save({title: 'algo', price: 123})
//    prueba.save({title: 'algo2', price: 127})
//    prueba.save({title: 'algo3', price: 1027})
//
//}
//finally{
//    prueba.getById(2)
//
//}
prueba.save({ title: "algo", price: 123 });
prueba.save({ title: "algo2", price: 127 });
//prueba.save({title: 'algo3', price: 1027})
//prueba.deleteAll();
//prueba.getAll();
//prueba.getById(2)
//prueba.deleteById(1)
//prueba.getAll()
