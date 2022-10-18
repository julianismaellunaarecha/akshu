function precisePrice(x) {
  return x.toPrecision(3);
}

function precise(x) {
  return x.toFixed();
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``;
    json.forEach((element) => {
      if (element.rating.rate <= 3 && element.category != "electronics") {
        let descuento = precise(
          element.rating.rate * 10 >= 35 ? 35 : element.rating.rate * 10
        );
        let precio = precisePrice(element.price - (element.price * descuento) / 100);
        outputspans += `
                <span class="producto" id="idproducto">
                  <div class="imagendelproducto"><img src="${element.image}" alt="${element.description}" id="idimagenproducto"></div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> 
                  <span class="oldprice"> $ ${element.price} </span>
                  <span class="newprice"> $ ${precio} </span>
                  <span class="discount"> -${descuento} %</span>
                  </div> 
                  <div class="titulodeproducto" id="idtitulodeproducto">${element.title}</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${element.description} 
                  </div>
                  <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                </span>
                `;
      }
    });
    document.getElementById("idofertas").innerHTML = outputspans;
  });