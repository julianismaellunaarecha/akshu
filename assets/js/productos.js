fetch("https://fakestoreapi.com/products/category/electronics")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``
    json.forEach((element) => {
      outputspans += `
                <span class="producto" id="idproducto">
                  <div class="imagendelproducto"><img src="${element.image}" alt="${element.description}" id="idimagenproducto"></div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> $ ${element.price}</div>
                  <div class="titulodeproducto" id="idtitulodeproducto">${element.title}</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${element.description} 
                  </div>
                  <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                </span>

                `;
    })
    document.getElementById("idproductosindex").innerHTML = outputspans;
  });

 