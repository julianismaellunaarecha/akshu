const reparamos = [
  "Computadoras de escritorio",
  "Notebooks",
  "Tablets",
  "Celulares",
  "Teléfonos IP",
];
const armamos = [
  "Computadoras de escritorio",
  "Notebooks",
  "Tablets",
  "Conexiones de red",
  "Celulares",
];
const mantenemos = [
  "Software",
  "Aplicaciones para celular",
  "Aplicaciones remotas",
  "Productos armados",
  "Telefonos IP",
];

function agregarfila(ifila) {
  let tabla = document.querySelector(".tabla");
  let fila = document.createElement("div");

  fila.className = "filas";

  for (let col = 0; col < 3; col++) {
    let columna = document.createElement("div");
    columna.className = "columnas";

    if (col == 0)
      columna.innerHTML = "<span class=vinietas> ► </span>" + reparamos[ifila];
    if (col == 1)
      columna.innerHTML = "<span class=vinietas> ► </span>" + armamos[ifila];
    if (col == 2)
      columna.innerHTML = "<span class=vinietas> ► </span>" + mantenemos[ifila];

    fila.appendChild(columna);
  }
  tabla.appendChild(fila);
}

function agregarFilas() {
    let totalservicios = 5;
  //agrego tantas filas como servicios con los que contamos
  for (let i = 0; i < totalservicios; i++) {
    agregarfila(i);
  }
}

agregarFilas();
