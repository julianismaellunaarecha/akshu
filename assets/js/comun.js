export let productsJson = async function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
export let categoriesJson;

export function precisePrice(x) {
  return parseFloat(x).toPrecision(3);
}

export default function nullFunction() {
  return "";
}

export function precise(x) {
  return parseFloat(x).toFixed();
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    productsJson = json;
  });

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => {
    categoriesJson = json;
  });
