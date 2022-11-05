import { productos } from "./producto.js";

let coincidencias = [];

export function getMatchingWords(palabra) {
  productos.forEach((producto) => {
    if (
      producto.titulo.match(new RegExp(palabra, "i")) ||
      producto.descripcion.match(new RegExp(palabra, "i")) ||
      producto.categoria.match(new RegExp(palabra, "i"))
    ) {
      coincidencias.push(producto);
    }
  });
}
