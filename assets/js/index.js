import { productos } from "./producto.js";
import { addToCart } from "./carrito.js";

function toggleDisplay(element) {
  if (document.getElementById(element).style.display == "none") {
    document.getElementById(element).style.display = "initial";
  } else {
    document.getElementById(element).style.display = "none";
  }
}

function carrouselProductos() {
  let outputdivs = ``;
  let indx1 = Math.floor(Math.random() * productos.length);
  let item1 = productos[indx1];
  outputdivs += `
          <div class="producto" id="idcarta">
            <div><img class="marcoimagen" src="${item1.urlImagen}" alt="${item1.descripcion}" id="idimagenproductocarta"></div>
            <div id="idpreciodelproductocarta"> $ ${item1.precio}</div>
            <div id="idtitulodeproductocarta">${item1.titulo}</div>
            <input type="number" value="1" min="1" name="cantidad" id="cantidad${item1.id}" required>
            <div class="pointer addtocart" id="${item1.id}">
              <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
            </div>
          </div>
      `;
  let indx2 = Math.floor(Math.random() * productos.length);
  if (indx1 == indx2) {
    if (indx2 == productos.length) {
      indx2--;
    } else {
      indx2++;
    }
  }
  let item2 = productos[indx2];
  outputdivs += `
  <div class="producto" id="idcarta">
    <div><img class="marcoimagen" src="${item2.urlImagen}" alt="${item2.descripcion}" id="idimagenproductocarta"></div>
    <div id="idpreciodelproductocarta"> $ ${item2.precio}</div>
    <div id="idtitulodeproductocarta">${item2.titulo}</div>
    <input type="number" value="1" min="1" name="cantidad" id="cantidad${item2.id}" required>
    <div class="pointer addtocart" id="${item2.id}">
      <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
    </div>
  </div>
`;
  let indx3 = Math.floor(Math.random() * productos.length);
  if (indx1 == indx3 && item2 == indx3) {
    if (indx3 == productos.length) {
      indx3--;
    } else {
      indx3++;
    }
  }
  let item3 = productos[indx3];
  outputdivs += `
  <div class="producto" id="idcarta">
    <div><img class="marcoimagen" src="${item3.urlImagen}" alt="${item3.descripcion}" id="idimagenproductocarta"></div>
    <div id="idpreciodelproductocarta"> $ ${item3.precio}</div>
    <div id="idtitulodeproductocarta">${item3.titulo}</div>
    <input type="number" value="1" min="1" name="cantidad" id="cantidad${item3.id}" required>
    <div class="pointer addtocart" id="${item3.id}">
      <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
    </div>
  </div>
`;
  document.getElementById("idcartascontenido").innerHTML = outputdivs;
}

function electronicProductsIndex() {
  let outputspans = ``;
  let i = 0;
  for (let producto of productos) {
    if (producto.categoria == "electronicos") {
      outputspans += `
                <span class="producto" id="idproducto">
                  <div class="imagendelproducto"><img class="marcoimagen" src="${producto.urlImagen}" alt="${producto.descripcion}" id="idimagenproducto"></div>
                  <div class="preciodelproducto" id="idpreciodelproducto"> $ ${producto.precio}</div>
                  <div class="titulodeproducto" id="idtitulodeproducto">${producto.titulo}</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${producto.descripcion} 
                  </div>
                  <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
                  <input type="number" value="1" min="1" name="cantidad" id="cantidad${producto.id}" required>
                  <div class="pointer addtocart" id="${producto.id}">
                    <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
                  </div>
                </span>
                `;
      i++;
    }
    if (i == 3) {
      break;
    }
  }
  document.getElementById("idproductosindex").innerHTML = outputspans;
}

function addHtmlToIndexSidebar() {
  let outputspans = ``;
  let i = 1;
  for (let producto of productos) {
    if (producto.percentageRating >= 70) {
      let style = ``;
      if (i != 1) {
        style = `style="display: none"`;
      } else {
        outputspans += `<div class="titulofav">Favoritos de los clientes</div>`;
      }
      outputspans += `
      <div class="sectionfav">
                <div class="titulodeproducto itema half pointer" id="${producto.id}">
                  <span class="producttitlefav"> ${producto.titulo} </span>
                  <span class="ratingandcount"> ${producto.percentageRating}% de ${producto.cantidadDeOpiniones} votos </span>                  
                </div>
                <div class="productof" ${style} id="idmenu${producto.id}">  
                  <p>
                    <div class="imagendelproductofav half"><img class="marcoimagen" src="${producto.urlImagen}" 
                    alt="${producto.descripcion}" id="idimagenproducto"> 
                      <span class="preciodelproductofav"> $ ${producto.precio}</span>
                    </div>
                    <div class="descripciondelproducto half">${producto.descripcion}</div>
                    <input type="number" value="1" min="1" name="cantidad" id="cantidad${producto.id}" required>
                    <div class="pointer addtocart" id="${producto.id}">
                      <i class="fa-solid fa-cart-plus">Agregar al carrito</i>
                    </div>
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
}

function addEventListenerCarritoIndex() {
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

function addEventListenerCarritoIndexToggleDisplaySidebar() {
  const itemsToToggle = document.querySelectorAll(".itema");
  itemsToToggle.forEach((itemToToggle) => {
    itemToToggle.addEventListener("click", function () {
      let idItem = itemToToggle.getAttribute("id");
      console.log(idItem);
      let idmenu = "idmenu" + idItem;
      console.log(idmenu);
      toggleDisplay(idmenu);
    });
  });
}

carrouselProductos();
electronicProductsIndex();
addHtmlToIndexSidebar();
addEventListenerCarritoIndex();
addEventListenerCarritoIndexToggleDisplaySidebar();

