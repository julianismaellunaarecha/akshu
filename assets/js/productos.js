import {productos} from "./producto.js";
import {categorias} from "./categoria.js";

let filteredProductos = productos;

async function addHtmlToProducts() {
  let outputspansprod = ``;
  for (let product of filteredProductos) {
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
  document.getElementById("idlistadoproductos").innerHTML = outputspansprod;
}

async function addHtmlToCategories() {
  let outputspanscat = `
  <h4 class="titulocategoria filtercategory" id="idtitulocategoria">Categorias</h4>
  <div class="filter all" id="todo">Todo</div>
  `;
  for (let category of categorias) {
    outputspanscat += `
    <div class="filter ${category.categoria}" id="${category.categoria}">${category.categorianombre}</div>
              `;
  }
  document.getElementById("idfiltros").innerHTML = outputspanscat;
}

addHtmlToProducts();
addHtmlToCategories();

async function filterProducts() {
  const filters = document.querySelectorAll(".filter");
  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      let selectedFilter = filter.getAttribute("id");
      filteredProductos = [];
      if (selectedFilter != "todo") {
        productos.forEach((el) => {
          if (selectedFilter == el.categoria) {
            filteredProductos.push(el);
          }
        });
      } else {
        filteredProductos = productos;
      }
      addHtmlToProducts();
    });
  });
}

filterProducts();

export default function retnull() {
  return ``;
}
