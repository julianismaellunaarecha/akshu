export function precisePrice(x) {
  return parseFloat(x).toPrecision(3);
}

export function precise(x) {
  return parseFloat(x).toFixed();
}

export default function emptyGet() {
  return "";
}

export async function retrieveCartItemsCount() {
  let existingEntries = JSON.parse(localStorage.getItem("allEntriesInCart"));
  let suma = 0;
  if (existingEntries != null && existingEntries.length > 0) {
    for (let existingEntry of existingEntries) {
      suma += +existingEntry.cantidad;
    }
  }
  if (suma > 0) {
    let htmlToPut = `<span class="badge cart-items">${suma}</span>`;
    document.getElementById("idcartitems").innerHTML = htmlToPut;
  } else {
    document.getElementById("idcartitems").innerHTML = ``;
  }
}
