import { precisePrice, precise } from "./comun.js";
import { retrieveCategory } from "./categoria.js";

export let productos = new Array();

export default class Producto {
  constructor(producto) {
    this.id = producto.id;
    this.precioAntiguo = producto.price * 300;
    this.titulo = producto.title;
    this.descripcion = producto.description;
    this.categoria = retrieveCategory(producto.category);
    this.urlImagen = producto.image;
    this.cantidadDeOpiniones = producto.rating.count;
    this.percentageRating = producto.rating.rate * 20;
    this.descuento = 0;
    this.precio = producto.price * 300;
    if (producto.rating.rate <= 3 && producto.category != "electronics") {
      this.descuento = precise(
        producto.rating.rate * 10 >= 35 ? 35 : producto.rating.rate * 10
      );
      this.precio =
        precisePrice(producto.price - (producto.price * this.descuento) / 100) *
        300;
    }
  }
}

await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((product) => {
      let producto = new Producto(product);
      productos.push(producto);
    });
  });
