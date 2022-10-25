export let carrito = new Array();

export async function addToCart(producto, cantidad) {
  const indx = carrito.findIndex((v) => v.product.id === producto.id);
  if (indx != -1 && carrito[indx].cantidad > 0) {
    carrito[indx].cantidad + cantidad;
  } else if (carrito[indx].cantidad != 0) {
    let itemCarrito = new ItemCarrito(producto, cantidad);
    carrito.push(itemCarrito);
  } else {
    carrito.splice(indx);
  }
}

export async function removeFromCart(producto, cantidad) {
  const indx = carrito.findIndex((v) => v.product.id === producto.id);
  if (indx != -1 && carrito[indx].cantidad > cantidad) {
    carrito[indx].cantidad - cantidad;
  } else {
    carrito.splice(indx);
  }
}

async function addHtmlToProducts() {
  let outputspansprod = `<div>El carrito esta vacio.</div>`;
  if (carrito.length > 0) {
    outputspansprod = ``;
    for (let product of carrito) {
      if (product.descuento > 0) {
        outputspansprod += `
              <div class="producto ${product.categoria}" id="idproducto">
                <div class="imagendelproducto"><img class="marcoimagen" src="${product.urlImagen}" alt="${product.descripcion}" id="idimagenproducto"></div>
                <div class="preciodelproducto" id="idpreciodelproducto"> 
                <span class="oldprice"> $ ${product.precioAntiguo} </span>
                <span class="newprice"> $ ${product.precio} </span>
                <span class="discount"> -${product.descuento} %</span>
                </div> 
                <div class="titulodeproducto" id="idtitulodeproducto">${product.titulo}</div>
                <div class="descripciondelproducto" id="iddescripciondelproducto">${product.descripcion} 
                </div>
                <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                <i class="fa-solid fa-cart-plus"></i>
              </div>
              `;
      } else {
        outputspansprod += `
              <div class="producto ${product.categoria}" id="idproducto">
                <div class="imagendelproducto"><img class="marcoimagen" src="${product.urlImagen}" alt="${product.descripcion}" id="idimagenproducto"></div>
                <div class="preciodelproducto" id="idpreciodelproducto"> $ ${product.precio}</div>
                <div class="titulodeproducto" id="idtitulodeproducto">${product.titulo}</div>
                <div class="descripciondelproducto" id="iddescripciondelproducto">${product.descripcion} 
                </div>
                <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                <i class="fa-solid fa-cart-plus"></i>
              </div>

              `;
      }
    }
  }
  document.getElementById("idproductosencarrito").innerHTML = outputspansprod;
}

addHtmlToProducts();

export default class ItemCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
