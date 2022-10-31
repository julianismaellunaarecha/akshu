import { productos } from "./producto.js";
import { addToCart } from "./carrito.js";

async function toggleDisplay(element) {
  if (document.getElementById(element).style.display == "none") {
    document.getElementById(element).style.display = "initial";
  } else {
    document.getElementById(element).style.display = "none";
  }
}

async function carrouselProductos() {
  let products = new Array();
  let outputdivs = ``;
  let indx1 = Math.floor(Math.random() * productos.length);
  let indx2 = Math.floor(Math.random() * productos.length);
  let indx3 = Math.floor(Math.random() * productos.length);
  if (indx1 == indx2) {
    if (indx2 == productos.length) {
      indx2--;
    } else {
      indx2++;
    }
  }
  if (indx1 == indx3 && item2 == indx3) {
    if (indx3 == productos.length) {
      indx3--;
    } else {
      indx3++;
    }
  }
  products.push(productos[indx1]);
  products.push(productos[indx2]);
  products.push(productos[indx3]);
  for (let product of products) {
    outputdivs += `
          <div class="producto" id="idcarta">
            <div><img class="marcoimagen" src="${product.urlImagen}" alt="${product.descripcion}" id="idimagenproductocarta"></div>
            <span class="precio-cantidad-agregar">
              <span id="idpreciodelproductocarta"> $ ${product.precio.toLocaleString()}</span>
              <div clss="cantidad-agregar">
                <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${product.id}" required>
                <button class="pointer addtocart" id="${product.id}">
                  <i class="fa-solid fa-cart-plus"></i>
                  <span class="text-add-to-cart">Agregar</span>
                </button>
              </div>
            </span>
            <div id="idtitulodeproductocarta">${product.titulo}</div>
          </div>
      `;
  }
  document.getElementById("idcartascontenido").innerHTML = outputdivs;
}

async function electronicProductsIndex() {
  let outputspans = ``;
  let i = 0;
  for (let producto of productos) {
    if (producto.categoria == "electronicos" && !producto.descuento > 0) {
      outputspans += `
                <div class="producto" id="idproducto">
                  <div class="imagendelproducto"><img class="marcoimagen" src="${producto.urlImagen}" alt="${producto.descripcion}" id="idimagenproducto">
                  </div>
                  <span class="precio-cantidad-agregar">
                    <span class="preciodelproducto" id="idpreciodelproducto"> $ ${producto.precio.toLocaleString()}</span>
                    <div clss="cantidad-agregar">
                      <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${producto.id}" required>
                      <button class="pointer addtocart" id="${producto.id}">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span class="text-add-to-cart">Agregar</span>
                      </button>
                    </div>
                  </span>
                  <div class="titulodeproducto" id="idtitulodeproducto">${producto.titulo}</div>
                  <div class="descripciondelproducto" id="iddescripciondelproducto">${producto.descripcion} 
                  </div>
                  <button class="button">Ver mas</button>
                </div>
                `;
      i++;
    }
    if (i == 3) {
      break;
    }
  }
  document.getElementById("idproductosindex").innerHTML = outputspans;
}

async function addHtmlToIndexSidebar() {
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
                  <span class="producttitlefav half"> ${producto.titulo} </span>
                  <span class="ratingandcount half"> ${producto.percentageRating}% de ${producto.cantidadDeOpiniones} votos </span>                  
                </div>
                <div class="productof" ${style} id="idmenu${producto.id}">  
                  <p>
                    <div class="imagendelproductofav half">
                    <img class="marcoimagen" src="${producto.urlImagen}" alt="${producto.descripcion}" id="idimagenproducto"> 
                      <span class="precio-cantidad-agregar">
                        <div class="preciodelproductofav"> $ ${producto.precio.toLocaleString()}</div>
                        <div clss="cantidad-agregar">
                          <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${producto.id}" required>
                          <button class="pointer addtocart" id="${producto.id}">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span class="text-add-to-cart">Agregar</span>
                          </button>
                        </div>
                      </span>
                    </div>
                    <div class="descripciondelproducto half">${producto.descripcion}</div>
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

async function addEventListenerCarritoIndex() {
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

async function addEventListenerCarritoIndexToggleDisplaySidebar() {
  const itemsToToggle = document.querySelectorAll(".itema");
  itemsToToggle.forEach((itemToToggle) => {
    itemToToggle.addEventListener("click", function () {
      let idItem = itemToToggle.getAttribute("id");
      let idmenu = "idmenu" + idItem;
      toggleDisplay(idmenu);
    });
  });
}

carrouselProductos();
electronicProductsIndex();
addHtmlToIndexSidebar();
addEventListenerCarritoIndex();
addEventListenerCarritoIndexToggleDisplaySidebar();
