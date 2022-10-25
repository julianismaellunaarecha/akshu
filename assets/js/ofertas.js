import {productos} from "./producto.js";

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
    </span>
      `;
    }
  }
  document.getElementById("idofertas").innerHTML = outputspans;
}

ofertas();
