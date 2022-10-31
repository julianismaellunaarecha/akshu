
const productos = [
  "Electrónicos",
  "Indumentaria",
  "Joyería",
  "Accesorios",
  "y más...",
];
const soporte = [
  "Armado de equipos informáticos",
  "Reparación de celulares",
  "Instalación de software remoto",
  "Reacondicionamiento de equipos",
  "Instalaciones de redes",
];

function agregarfila(ifila) {
  let tabla = document.querySelector(".tabla");
  let fila = document.createElement("div");

  fila.className = "filas";

  for (let col = 0; col < 2; col++) {
    let columna = document.createElement("div");
    columna.className = "columnas divisor marco cuadro";

    if (col == 0)
      columna.innerHTML = "<span class=vinietas> * </span>" + productos[ifila];
    if (col == 1)
      columna.innerHTML = "<span class=vinietas> * </span>" + soporte[ifila];    

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
