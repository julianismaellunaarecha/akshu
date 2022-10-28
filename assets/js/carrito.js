import { productos } from "./producto.js";

async function addHtmlToProductsCarts() {
  let outputspansprod = `<div>El carrito esta vacio.</div>`;
  let existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  if (existingEntries != null && existingEntries.length > 0) {
    outputspansprod = ``;
    for (let existingEntry of existingEntries) {
      const indx = productos.findIndex((v) => v.id == existingEntry.productoId);
      if (productos[indx] != null) {
        if (productos[indx].descuento > 0) {
          outputspansprod += `
              <div class="producto ${productos[indx].categoria}" id="${productos[indx].id}">
                <span class="imagendelproducto"><img class="marcoimagen" src="${productos[indx].urlImagen}" alt="${productos[indx].descripcion}" id="idimagenproducto"></span>
                <span class="titulodeproducto" id="idtitulodeproducto">${productos[indx].titulo}</span>
                <span class="preciodelproducto" id="idpreciodelproducto"> 
                  <span class="oldprice"> $ ${productos[indx].precioAntiguo} </span>
                  <span class="newprice"> $ ${productos[indx].precio} </span>
                  <span class="discount"> -${productos[indx].descuento} %</span>
                </span> 
                <input type="number" value="${existingEntry.cantidad}" min="1" name="cantidad" id="cantidad${productos[indx].id}" required>
                <div class="pointer removeFromCart" id="${productos[indx].id}">
                  <i class="fa-solid fa-trash-can">Remover del carrito.</i>
                </div>
              </div>
              `;
        } else {
          outputspansprod += `
              <div class="producto ${productos[indx].categoria}" id="${productos[indx].id}">
                <span class="imagendelproducto"><img class="marcoimagen" src="${productos[indx].urlImagen}" alt="${productos[indx].descripcion}" id="idimagenproducto"></span>
                <span class="titulodeproducto" id="idtitulodeproducto">${productos[indx].titulo}</span>
                <span class="preciodelproducto" id="idpreciodelproducto"> $ ${productos[indx].precio}</span>
                <input type="number" value="${existingEntry.cantidad}" min="1" name="cantidad" id="cantidad${productos[indx].id}" required>
                <div class="pointer removeFromCart" id="${productos[indx].id}">
                  <i class="fa-solid fa-trash-can">Remover del carrito.</i>
                </div>
              </div>
              `;
        }
      }
    }
  }
  document.getElementById("idproductosencarrito").innerHTML = outputspansprod;
}

async function addHtmlToCartTotals() {
  let outputspansprod = ``;
  let existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  if (existingEntries != null && existingEntries.length > 0) {
    let descuentoTotal = 0;
    let precioTotal = 0;
    for (let existingEntry of existingEntries) {
      const indx = productos.findIndex((v) => v.id == existingEntry.productoId);
      if (productos[indx] != null) {
        let precioProducto = productos[indx].precio * existingEntry.cantidad;
        let descuentoProducto =
          (productos[indx].precioAntiguo - productos[indx].precio) *
          existingEntry.cantidad;
        descuentoTotal += descuentoProducto;
        precioTotal += precioProducto;
      }
    }
    outputspansprod += `
        <div class="total">
          <span class="precio-total">${precioTotal}</span>
          <span class="descuento-total">${descuentoTotal}</span>
        </div>
    `;
  }
  document.getElementById("idcarritototales").innerHTML = outputspansprod;
}

export async function addToCart(productoId, cantidad) {
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

async function modifyCart(productoId, cantidad) {
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
        existingEntries[indx].cantidad = cantidad;
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
  addHtmlToCartTotals();
}

async function removeFromCart(productoId) {
  var existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  if (existingEntries != null) {
    const indx = existingEntries.findIndex((v) => v.productoId === productoId);
    if (indx >= 0) {
      existingEntries.splice(indx, 1);
    }
  }
  if (existingEntries.length == 0) {
    localStorage.clear();
    addHtmlToProductsCarts();
    addHtmlToCartTotals();
  } else {
    localStorage.setItem("allEntriesInCart", JSON.stringify(existingEntries));
    addHtmlToProductsCarts();
    addHtmlToCartTotals();
    addEventListenerItems();
    addEventListenerCarritoRemover();
  }
}

async function addEventListenerItems() {
  const modifyItemsInCart = document.querySelectorAll(".producto");
  modifyItemsInCart.forEach((modifyItemInCart) => {
    modifyItemInCart.addEventListener("change", (event) => {
      let idProducto = modifyItemInCart.getAttribute("id");
      let cantidad = event.target.value;
      modifyCart(idProducto, cantidad);
    });
  });
}

async function addEventListenerCarritoRemover() {
  const removeItemsFromCart = document.querySelectorAll(".removeFromCart");
  removeItemsFromCart.forEach((removeItemFromCart) => {
    removeItemFromCart.addEventListener("click", function () {
      let idProducto = removeItemFromCart.getAttribute("id");
      removeFromCart(idProducto);
    });
  });
}

addHtmlToProductsCarts();
addHtmlToCartTotals();
addEventListenerItems();
addEventListenerCarritoRemover();
