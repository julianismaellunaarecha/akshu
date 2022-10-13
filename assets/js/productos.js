fetch("https://fakestoreapi.com/products/category/electronics")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``
    json.forEach((element) => {
      outputspans += `
                <span class="producto" id="idproducto">
                  <div class="titulodeproducto" id="idtitulodeproducto">${element.title}</div>
                  <div class="imagendelproducto"><img src="${element.image}" alt="${element.description}" id="idimagenproducto"></div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${element.description}</div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> $ ${element.price}</div>
                </span>

                `;
    })
    document.getElementById("idproductosindex").innerHTML = outputspans;
  });
