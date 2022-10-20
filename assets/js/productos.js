import { precisePrice, precise } from "./comun.js";

let productsJson = await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    return json;
  });

let categoriesJson = await fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => {
    return json;
  });

function retrieveCategory(x) {
  switch (x) {
    case "electronics":
      return "electronicos";
    case "jewelery":
      return "joyeria";
    case "men's clothing":
      return "indumentariamasculina";
    case "women's clothing":
      return "indumentariafemenina";
    default:
      return "todo";
  }
}

function retrieveCategoryName(x) {
  switch (x) {
    case "electronics":
      return "Electronicos";
    case "jewelery":
      return "Joyeria";
    case "men's clothing":
      return "Indumentaria masculina";
    case "women's clothing":
      return "Indumentaria femenina";
    default:
      return "Todo";
  }
}

function addHtmlToProducts() {
  let outputspansprod = ``;
  for (let product of productsJson) {
    let categoria = retrieveCategory(product.category);
    if (product.rating.rate <= 3 && product.category != "electronics") {
      let descuento = precise(
        product.rating.rate * 10 >= 35 ? 35 : product.rating.rate * 10
      );
      let precio = precisePrice(
        (product.price - (product.price * descuento) / 100)
      );
      outputspansprod += `
              <div class="producto ${categoria}" id="idproducto">
                <div class="imagendelproducto"><img class="marcoimagen" src="${
                  product.image
                }" alt="${product.description}" id="idimagenproducto"></div>
                <div class="preciodelproducto" id="idpreciodelproducto"> 
                <span class="oldprice"> $ ${product.price * 300} </span>
                <span class="newprice"> $ ${precio  * 300} </span>
                <span class="discount"> -${descuento} %</span>
                </div> 
                <div class="titulodeproducto" id="idtitulodeproducto">${
                  product.title
                }</div>
                <div class="descripciondelproducto" id="iddescripciondelproducto">${
                  product.description
                } 
                </div>
                <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
              </div>
              `;
    } else {
      outputspansprod += `
              <div class="producto ${categoria}" id="idproducto">
                <div class="imagendelproducto"><img class="marcoimagen" src="${
                  product.image
                }" alt="${product.description}" id="idimagenproducto"></div>
                <div class="preciodelproducto" id="idpreciodelproducto"> $ ${
                  product.price * 300
                }</div>
                <div class="titulodeproducto" id="idtitulodeproducto">${
                  product.title
                }</div>
                <div class="descripciondelproducto" id="iddescripciondelproducto">${
                  product.description
                } 
                </div>
                <span id="expand-sizer" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false">Ver mas</span>
              </div>

              `;
    }
  }
  document.getElementById("idlistadoproductos").innerHTML = outputspansprod;
}

function addHtmlToCategories() {
  let outputspanscat = `
  <h4 class="titulocategoria filtercategory" id="idtitulocategoria">Categorias</h4>
  <div class="filter all" id="todo">Todo</div>
  `;
  for (let category of categoriesJson) {
    let categoria = retrieveCategory(category);
    let categorianombre = retrieveCategoryName(category);
    outputspanscat += `
    <div class="filter ${categoria}" id="${categoria}">${categorianombre}</div>
              `;
  }
  document.getElementById("idfiltros").innerHTML = outputspanscat;
}

addHtmlToProducts();
addHtmlToCategories();

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("id");
    let itemsToHide = [];
    let itemsToShow = document.querySelectorAll(".producto");

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });

    if (selectedFilter != "todo") {
      itemsToHide = document.querySelectorAll(
        `.producto:not(.${selectedFilter})`
      );
      itemsToShow = document.querySelectorAll(`.producto .${selectedFilter}`);
      console.log(selectedFilter);
      console.log(itemsToHide);
      console.log(itemsToShow);
    }
    if (selectedFilter == "todo") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(".producto");
      console.log(selectedFilter);
      console.log(itemsToHide);
      console.log(itemsToShow);
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  });
});
