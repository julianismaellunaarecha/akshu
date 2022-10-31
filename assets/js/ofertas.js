import { productos } from "./producto.js";
import { addToCart } from "./carrito.js";

async function ofertas() {
  let outputspans = ``;
  for (let productoOferta of productos) {
    if (productoOferta.descuento > 0) {
      outputspans += `
      <span class="producto" id="idproducto">
      <div class="imagendelproducto"><img class="marcoimagen" src="${productoOferta.urlImagen}" alt="${productoOferta.descripcion}" id="idimagenproducto"></div>
      <span class="precio-cantidad-agregar">
        <div class="preciodelproducto" id="idpreciodelproducto"> 
          <span class="oldprice"> $ ${productoOferta.precioAntiguo.toLocaleString()} </span>
          <span class="newprice"> $ ${productoOferta.precio.toLocaleString()} </span>
          <span class="discount"> -${productoOferta.descuento} %</span>
        </div> 
        <div clss="cantidad-agregar">
          <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${productoOferta.id}" required>
          <button class="pointer addtocart" id="${productoOferta.id}">
            <i class="fa-solid fa-cart-plus"></i>
            <span class="text-add-to-cart">Agregar</span>
          </button>
        </div>
      </span>
      <div class="titulodeproducto" id="idtitulodeproducto">${productoOferta.titulo}</div>
      <div class="descripciondelproducto" id="iddescripciondelproducto">${productoOferta.descripcion} 
      </div>
      <button class="button">Ver mas</button>
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