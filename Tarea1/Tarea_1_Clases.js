class Usuario {
  constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  addMascota(masc) {
    this.mascotas.push(masc);
  }

  countMascotas() {
    console.log(this.mascotas.length);
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    const arrayNombresLibros = [];
    for (const cadaLibro in this.libros) {
      arrayNombresLibros.push(this.libros[cadaLibro]["nombre"]);
    }
    console.log(arrayNombresLibros);
  }
}

const usuario = new Usuario(
  "facundo",
  "rodriguez",
  [{ nombre: 1984, autor: "Orwell" }],
  ["acacia"]
);

console.log(usuario);
usuario.getFullName();
usuario.countMascotas();
usuario.getBookNames();

usuario.addMascota("gato");
usuario.addBook("Rayuela", "Cortazar");
usuario.countMascotas();
usuario.getBookNames();
