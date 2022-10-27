import { productos } from "./producto.js";

// export function removeFromCart(producto, cantidad) {
//   const indx = carrito.findIndex((v) => v.product.id === producto.id);
//   if (indx != -1 && carrito[indx].cantidad > cantidad) {
//     carrito[indx].cantidad - cantidad;
//   } else {
//     carrito.splice(indx);
//   }
// }

async function addHtmlToProductsCarts() {
  let outputspansprod = `<div>El carrito esta vacio.</div>`;
  let existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  if (existingEntries.length > 0) {
    let descuentoTotal = 0;
    let precioTotal = 0;
    outputspansprod = ``;
    for (let existingEntry of existingEntries) {
      const indx = productos.findIndex((v) => v.id == existingEntry.productoId);
      console.log(indx);
      if (productos[indx] != null) {
        let precioProducto = productos[indx].precio * existingEntry.cantidad;
        let descuentoProducto = productos[indx].precioAntiguo - productos[indx].precio;
        descuentoTotal += descuentoProducto;
        precioTotal += precioProducto;
        if (productos[indx].descuento > 0) {
          outputspansprod += `
              <div class="producto ${productos[indx].categoria}" id="idproducto">
                <span class="imagendelproducto"><img class="marcoimagen" src="${productos[indx].urlImagen}" alt="${productos[indx].descripcion}" id="idimagenproducto"></span>
                <span class="titulodeproducto" id="idtitulodeproducto">${productos[indx].titulo}</span>
                <span class="preciodelproducto" id="idpreciodelproducto"> 
                  <span class="oldprice"> $ ${productos[indx].precioAntiguo} </span>
                  <span class="newprice"> $ ${productos[indx].precio} </span>
                  <span class="discount"> -${productos[indx].descuento} %</span>
                </span> 
                <span class="cantidad">${existingEntry.cantidad}</span>
              </div>
              `;
        } else {
          outputspansprod += `
              <div class="producto ${productos[indx].categoria}" id="idproducto">
                <span class="imagendelproducto"><img class="marcoimagen" src="${productos[indx].urlImagen}" alt="${productos[indx].descripcion}" id="idimagenproducto"></span>
                <span class="titulodeproducto" id="idtitulodeproducto">${productos[indx].titulo}</span>
                <span class="preciodelproducto" id="idpreciodelproducto"> $ ${productos[indx].precio}</span>
                <span class="cantidad">${existingEntry.cantidad}</span>
              </div>
              `;
        }
      }
    }
    outputspansprod += `
        <div class="total">
          <span class="precio-total">${precioTotal}</span>
          <span class="descuento-total">${descuentoTotal}</span>
        </div>
    `;
    outputspansprod =`
        <div class="total">
          <span class="precio-total">${precioTotal}</span>
          <span class="descuento-total">${descuentoTotal}</span>
        </div>
    ` + outputspansprod;
  }
  document.getElementById("idproductosencarrito").innerHTML = outputspansprod;
}

// export default class ItemCarrito {
//   constructor(producto, cantidad) {
//     this.producto = producto;
//     this.cantidad = cantidad;
//   }
// }

export async function addToCart(productoId, cantidad) {
  // Parse the JSON stored in allEntriesP
  var existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  var entryItem = {
    productoId: productoId,
    cantidad: cantidad,
  };
  if (existingEntries != null) {
    const indx = existingEntries.findIndex(
      (v) => v.productoId === entryItem.productoId
    );
    if (indx >= 0) {
      if (existingEntries[indx].cantidad >= 0) {
        existingEntries[indx].cantidad =
          +existingEntries[indx].cantidad + +cantidad;
      } else {
        existingEntries.push(entryItem);
      }
    } else {
      existingEntries.push(entryItem);
    }
  } else {
    existingEntries = [];
    existingEntries.push(entryItem);
  }
  localStorage.setItem("entry", JSON.stringify(entryItem));
  localStorage.setItem("allEntriesInCart", JSON.stringify(existingEntries));
}

addHtmlToProductsCarts();
