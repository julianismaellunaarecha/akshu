import { precisePrice, precise } from "./comun.js";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``;
    json.forEach((element) => {
      if (element.rating.rate <= 3 && element.category != "electronics") {
        let descuento = precise(
          element.rating.rate * 10 >= 35 ? 35 : element.rating.rate * 10
        );
        let precio = precisePrice(
          element.price - (element.price * descuento) / 100
        );
        outputspans += `
                <span class="producto" id="idproducto">
                  <div class="imagendelproducto"><img class="marcoimagen" src="${
                    element.image
                  }" alt="${element.description}" id="idimagenproducto"></div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> 
                  <span class="oldprice"> $ ${element.price * 300} </span>
                  <span class="newprice"> $ ${precio * 300} </span>
                  <span class="discount"> -${descuento} %</span>
                  </div> 
                  <div class="titulodeproducto" id="idtitulodeproducto">${
                    element.title
                  }</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${
                    element.description
                  } 
                  </div>
                  <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                </span>
                `;
      }
    });
    document.getElementById("idofertas").innerHTML = outputspans;
  });
