import { productos } from "./producto.js";
import { addToCart } from "./carrito.js";

async function ofertas() {
  let outputspans = ``;
  for (let productoOferta of productos) {
    if (productoOferta.descuento > 0) {
      outputspans += `
      <span class="producto" id="idproducto">
      <div class="imagendelproducto"><img class="marcoimagen" src="${productoOferta.urlImagen}" alt="${productoOferta.descripcion}" id="idimagenproducto"></div>
      <div class="preciodelproducto" id="idpreciodelproducto"> 
      <span class="oldprice"> $ ${productoOferta.precioAntiguo} </span>
      <span class="newprice"> $ ${productoOferta.precio} </span>
      <span class="discount"> -${productoOferta.descuento} %</span>
      </div> 
      <div class="titulodeproducto" id="idtitulodeproducto">${productoOferta.titulo}</div>
      <div class="descripciondelproducto" id="iddescripciondelproducto">${productoOferta.descripcion} 
      </div>
      <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
      <input type="number" value="1" min="1" name="cantidad" id="cantidad${productoOferta.id}" required>
      <div class="pointer addtocart" id="${productoOferta.id}">
        <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
      </div>
    </span>
      `;
    }
  }
  document.getElementById("idofertas").innerHTML = outputspans;
}

ofertas();

async function addEventListenerCarritoOfertas() {
  const addItemsToCart = document.querySelectorAll(".addtocart");
  addItemsToCart.forEach((addItemToCart) => {
    addItemToCart.addEventListener("click", function () {
      let idProducto = addItemToCart.getAttribute("id");
      let cant = "cantidad" + idProducto;
      let cantidad = document.getElementById(cant).value;
      addToCart(idProducto, cantidad);
    });
  });
}

addEventListenerCarritoOfertas();