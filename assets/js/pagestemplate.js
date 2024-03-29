import { retrieveCartItemsCount } from "./comun.js";

function loadStyles() {
  const tarjetaproductolinknode = document.createElement("link");
  tarjetaproductolinknode.setAttribute(
    "href",
    "assets/css/tarjetaproducto.css"
  );
  tarjetaproductolinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(tarjetaproductolinknode);

  const navigationbarlinknode = document.createElement("link");
  navigationbarlinknode.setAttribute("href", "assets/css/navigationbar.css");
  navigationbarlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(navigationbarlinknode);

  const marcolinknode = document.createElement("link");
  marcolinknode.setAttribute("href", "assets/css/marco.css");
  marcolinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(marcolinknode);
}

loadStyles();

function loadHtml() {
  document.getElementById("idheader").innerHTML = `
<div  id="idbanner">
    <span id="idprueba"><a href="index.html">Pagina de prueba para TPO</a></span>
    <span id="idbannerofertas">
        <a href="ofertas.html" id="idmensajeoferta">Hasta 35% de descuento en OFERTAS.</a>    
    </span>
</div>
<nav class="nav" id="idnav">
    <div id="idlogoandsearch">
        <div id="idlogocontainer">
            <div id="idlogo">
                <a href="index.html">
                    <img src="assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="index.html"> 
                </a>
            </div>
            <div id="idmarca">
                <a href="index.html">
                    <h1>Akshu</h1>
                </a>
            </div>
        </div>
        <div id="idsearchform">
            <form class="searchform">
                <input type="text" placeholder="Buscar producto o servicio" id="idinputform">
                <button type="submit" id="idbuttonform" aria-label="Buscar">
                    <img id="idimgbusqueda" src="assets/icons/searchicongoogle.svg" alt="Imagen de una lupa que permite buscar productos o servicios tecnológicos provistos por Akshu">
                </button>
            </form>
        </div>
    </div>  
    <span class="menu" id="idmenu">
        <span class="menuitems">
            <button class="openmenu" aria-label="Desplegar menú">
                <img src="assets/img/mburguer.png" alt="Desplegar menú">
            </button>   
            <ol>
                <li id="idnavlineitem">
                    <a href="index.html"><h2>Inicio</h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="quienessomos.html"><h2>Quienes somos</h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="cuenta.html"><h2>Cuenta</h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="ofertas.html"><h2>Ofertas</h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="productos.html"><h2>Productos<h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="servicios.html"><h2>Servicios<h2></a>
                </li>
                <li id="idnavlineitem">
                    <a href="contacto.html"><h2>Contacto<h2></a>
                </li>
            </ol>
        </span>
        <span class="menucarrito">
            <a href="carrito.html">
                <span>
                    <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span id="idcartitems">
                </span>
            </a>
        </span>
    </span>
</nav>
`;

  document.getElementById("idfooter").innerHTML = `
<div id="idfootercontainer">
    <span id="idlogocontainer" class="hidden">
        <span id="idlogo" class="hidden">
            <a href="index.html" class="hidden">
                <img src="assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="index.html"> 
            </a>
        </span>
        <span id="idmarca" class="hidden">
            <a href="index.html">
                Akshu
            </a>
        </span>
    </span>
    <span id="idderechos">© Grupo akshu - Todos los derechos reservados</span>
    <span id="idicons">
        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-square-instagram fa-xl" id="idinstagram"></i></a>
        <a href="https://www.facebook.com/" target="_blank"> <i class="fa-brands fa-facebook fa-xl" id="idfacebook"></i></a>
        <a href="https://www.youtube.com/" target="_blank">  <i class="fa-brands fa-youtube fa-xl" id="idyoutube"></i></a>
        <a href="https://twitter.com/" target="_blank">  <i class="fa-brands fa-twitter fa-xl" id="idtwitter"></i></a>
        <a href="https://www.linkedin.com/" target="_blank">  <i class="fa-brands fa-linkedin fa-xl" id="idlinkedin"></i></a>
        <a href="https://github.com/" target="_blank">   <i class="fa-brands fa-github fa-xl" id="idgithub"></i></a>
        <a href="https://es.stackoverflow.com/" target="_blank">    <i class="fa-brands fa-stack-overflow fa-xl" id="idstackoverflow"></i></a>
        <a href="https://www.twitch.tv/" target="_blank">    <i class="fa-brands fa-twitch fa-xl" id="idtwitch"></i></a>
    </span>
</div>
`;
}
loadHtml();
retrieveCartItemsCount();

function toogleMenu() {
  const menu = document.querySelector("#idmenu ol");
  menu.classList.toggle("menu_opened");
}

function toggleHamburguesa() {
  const openMenuBtn = document.querySelector(".openmenu");
  openMenuBtn.addEventListener("click", toogleMenu);
}

toggleHamburguesa();