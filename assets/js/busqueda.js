import { productos } from "./producto.js";

export function getMatchingWords(palabra) {
  let respuesta = [];
  productos.forEach((producto) => {
    console.log(producto.titulo.match(new RegExp(palabra, "i")));
    console.log(producto.descripcion.match(new RegExp(palabra, "i")));
    console.log(producto.categoria.match(new RegExp(palabra, "i")));
    if (
      producto.titulo.match(new RegExp(palabra, "i")) ||
      producto.descripcion.match(new RegExp(palabra, "i")) ||
      producto.categoria.match(new RegExp(palabra, "i"))
    ) {
      console.log(producto.titulo);
      console.log(producto.descripcion);
      respuesta.push(producto);
    }
  });
  respuesta = respuesta.length ? respuesta : "No encontrado.";
  console.log(respuesta);
  return respuesta;
}
