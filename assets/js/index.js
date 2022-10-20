function toggleDisplay(element) {
    if(document.getElementById(element).style.display == "none"){
    document.getElementById(element).style.display = "initial";
    } else {
      document.getElementById(element).style.display = "none";
    }
  }

fetch("https://fakestoreapi.com/products?limit=3")
  .then((res) => res.json())
  .then((json) => {
    let outputdivs = ``;
    json.forEach((element) => {
      outputdivs += `
          <div class="producto" id="idcarta">
            <div><img class="marcoimagen" src="${element.image}" alt="${element.description}" id="idimagenproductocarta"></div>
            <div id="idpreciodelproductocarta"> $ ${element.price * 300}</div>
            <div id="idtitulodeproductocarta">${element.title}</div>
          </div>
      `;
    });
    document.getElementById("idcartascontenido").innerHTML = outputdivs;
  });

function classToggle() {
  var el = document.querySelector(".cartascontenido");
  el.classList.toggle("step-animation");
}


fetch("https://fakestoreapi.com/products/category/electronics?limit=3")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``;
    json.forEach((element) => {
      outputspans += `
                <span class="producto" id="idproducto">
                  <div class="imagendelproducto"><img class="marcoimagen" src="${element.image}" alt="${element.description}" id="idimagenproducto"></div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> $ ${element.price * 300}</div>
                  <div class="titulodeproducto" id="idtitulodeproducto">${element.title}</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${element.description} 
                  </div>
                  <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                </span>

                `;
    });
    document.getElementById("idproductosindex").innerHTML = outputspans;
  });

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let outputspans = ``;
    let i = 1;
    for (element of json) {
      if (element.rating.rate >= 3) {
        let style = ``;
        if (i != 1) {
          style = `style="display: none"`;
        } else {
          outputspans = `<div class="titulofav">Favoritos de los clientes</div>`;
        }
        outputspans += `
      <div class="sectionfav">
                <div class="titulodeproducto itema half pointer" onclick="toggleDisplay('idmenu${i}')">
                  <span class="producttitlefav"> ${element.title} </span>
                  <span class="ratingandcount"> ${
                    element.rating.rate * 20
                  }% de ${element.rating.count} votos </span>                  
                </div>
                <div class="productof" ${style} id="idmenu${i}">  
                  <p>
                    <div class="imagendelproductofav half"><img class="marcoimagen" src="${
                      element.image
                    }" alt="${
          element.description
        }" id="idimagenproducto"> <span class="preciodelproductofav"> $ ${
          element.price * 300
        }</span></div>
                    <div class="descripciondelproducto half">${
                      element.description
                    }</div>
                  </p>  
                </div>  
      </div>
                `;
        i++;
      }
      if (i >= 15) {
        break;
      }
    }

    document.getElementById("idfavoritos").innerHTML = outputspans;
  });
