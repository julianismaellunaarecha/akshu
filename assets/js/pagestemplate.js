function myFunction() {
  const tarjetaproductolinknode = document.createElement("link");
  tarjetaproductolinknode.setAttribute("href", "assets/css/tarjetaproducto.css");
  tarjetaproductolinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(tarjetaproductolinknode);

  const navigationbarlinknode = document.createElement("link");
  navigationbarlinknode.setAttribute("href", "assets/css/navigationbar.css");
  navigationbarlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(navigationbarlinknode);

  const carrousellinknode = document.createElement("link");
  carrousellinknode.setAttribute("href", "assets/css/carrousel.css");
  carrousellinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(carrousellinknode);

  const comunlinknode = document.createElement("link");
  comunlinknode.setAttribute("href", "assets/css/comun.css");
  comunlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(comunlinknode);
}

myFunction();

document.getElementById("idheader").innerHTML = `
<div id="idprueba">Pagina de prueba para TPO</div>
<div id="idbanner">
    <a href="ofertas.html">Hasta 35% de descuento en OFERTAS.</a>    
</div>
<nav id="idnav">
    <div id="idlogoandsearch">
        <div id="idlogocontainer">
            <div id="idlogo">
                <a href="index.html">
                    <img src="assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="index.html"> 
                </a>
            </div>
            <div id="idmarca">
                <a href="index.html">
                    Akshu
                </a>
            </div>
        </div>
        <div id="idsearchform">
            <form>
                <input type="text" placeholder="Buscar producto o servicio" id="idinputform">
                <button type="submit" id="idbuttonform">
                    <img id="idimgbusqueda" src="assets/icons/searchicongoogle.svg" alt="Imagen de una lupa que permite buscar productos o servicios tecnológicos provistos por Akshu">
                </button>
            </form>
        </div>
    </div>
    <div id="idmenu">
        <ol>
            <li id="idnavlineitem">
                <a href="index.html">Inicio</a>
            </li>
            <li id="idnavlineitem">
                <a href="quienessomos.html">Quienes somos</a>
            </li>
            <li id="idnavlineitem">
                <a href="cuenta.html">Cuenta</a>
            </li>
            <li id="idnavlineitem">
                <a href="ofertas.html">Ofertas</a>
            </li>
            <li id="idnavlineitem">
                <a href="carrito.html">Carrito</a>
            </li>
            <li id="idnavlineitem">
                <a href="servicios.html">Servicios</a>
            </li>
            <li id="idnavlineitem">
                <a href="contacto.html">Contacto</a>
            </li>
        </ol>
    </div>
</nav>
`;

document.getElementById("idfooter").innerHTML = `
<div id="idderechos">
    © Grupo akshu - Todos los derechos reservados
</div>
`;

