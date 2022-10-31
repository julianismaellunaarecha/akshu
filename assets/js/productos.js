import { productos } from "./producto.js";
import { categorias } from "./categoria.js";
import { addToCart } from "./carrito.js";

let filteredProductos = productos;

async function toggleDisplayOverflow(idItem) {
  let iddesc = "iddesc" + idItem;
  let idItemContainer = "desplegable" + idItem;
  if (document.getElementById(idItemContainer).style.height == "230px") {
    document.getElementById(idItemContainer).style.height = "auto";
  } else {
    document.getElementById(idItemContainer).style.height = "230px";
  }
  if (document.getElementById(iddesc).style.overflow == "hidden") {
    document.getElementById(iddesc).style.overflow = "initial";
  } else {
    document.getElementById(iddesc).style.overflow = "hidden";
  }
}

async function addHtmlToProducts() {
  let outputspansprod = ``;
  for (let product of filteredProductos) {
    if (product.descuento > 0) {
      outputspansprod += `
              <div class="producto ${product.categoria}" id="desplegable${product.id}" style="height: 230px;">
                <div class="imagendelproducto"><img class="marcoimagen" src="${product.urlImagen}" alt="${product.descripcion}" id="idimagenproducto"></div>
                <span class="precio-cantidad-agregar">
                  <div class="preciodelproducto" id="idpreciodelproducto"> 
                    <span class="oldprice"> $ ${product.precioAntiguo.toLocaleString()} </span>
                    <span class="newprice"> $ ${product.precio.toLocaleString()} </span>
                    <span class="discount"> -${product.descuento} %</span>
                  </div> 
                  <div clss="cantidad-agregar">
                    <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${product.id}" required>
                    <button class="pointer addtocart" id="${product.id}">
                      <i class="fa-solid fa-cart-plus"></i>
                      <span class="text-add-to-cart">Agregar</span>
                    </button>
                  </div> 
                </span> 
                <div class="titulodeproducto" id="idtitulodeproducto">${product.titulo}</div>
                <div class="descripciondelproducto" id="iddesc${product.id}" style="overflow: hidden;">${product.descripcion} 
                </div>
                <button class="button vermas pointer" id="${product.id}"><i class="fa-solid fa-angle-down"></i></button>
            </div>
              `;
    } else {
      outputspansprod += `
              <div class="producto ${product.categoria}" id="desplegable${product.id}" style="height: 230px;">
                <div class="imagendelproducto"><img class="marcoimagen" src="${product.urlImagen}" alt="${product.descripcion}" id="idimagenproducto"></div>
                <span class="precio-cantidad-agregar">
                  <div class="preciodelproducto" id="idpreciodelproducto"> $ ${product.precio.toLocaleString()}</div>
                  <div clss="cantidad-agregar">
                    <input type="number" class="input-cantidad-producto" value="1" min="1" name="cantidad" id="cantidad${product.id}" required>
                    <button class="pointer addtocart" id="${product.id}">
                      <i class="fa-solid fa-cart-plus"></i>
                      <span class="text-add-to-cart">Agregar</span>
                    </button>
                  </div>
                </span>
                <div class="titulodeproducto" id="idtitulodeproducto">${product.titulo}</div>
                <div class="descripciondelproducto" id="iddesc${product.id}" style="overflow: hidden;">
                  ${product.descripcion}
                </div>
                <button class="button vermas pointer" id="${product.id}"><i class="fa-solid fa-angle-down"></i></button>
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

export async function addEventListenerCarrito() {
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

export async function addEventListenerCarritoIndexToggleDisplayDesc() {
  const itemsToToggle = document.querySelectorAll(".vermas");
  itemsToToggle.forEach((itemToToggle) => {
    itemToToggle.addEventListener("click", function () {
      let idItem = itemToToggle.getAttribute("id");
      toggleDisplayOverflow(idItem);
    });
  });
}

export default function retnull() {
  return ``;
}

addHtmlToProducts();
addHtmlToCategories();
filterProducts();
addEventListenerCarrito();
addEventListenerCarritoIndexToggleDisplayDesc();
