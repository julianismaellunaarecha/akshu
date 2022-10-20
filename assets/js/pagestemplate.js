function loadStyles() {
  const tarjetaproductolinknode = document.createElement("link");
  tarjetaproductolinknode.setAttribute("href", "assets/css/tarjetaproducto.css");
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

document.getElementById("idheader").innerHTML = `
<div  id="idbanner">
    <span id="idprueba">Pagina de prueba para TPO</span>
    <span id="idbannerofertas">
        <a href="ofertas.html" id="idmensajeoferta">Hasta 35% de descuento en OFERTAS.</a>    
    </span>
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
                <a href="productos.html">Productos</a>
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
<div id="idfootercontainer">
    <span id="idlogocontainer" class="hidden">
        <span id="idlogo">
            <a href="index.html">
                <img src="assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="index.html"> 
            </a>
        </span>
        <span id="idmarca">
            <a href="index.html">
                Akshu
            </a>
        </span>
    </span>
    <span id="idderechos">© Grupo akshu - Todos los derechos reservados</span>
    <span id="idicons">
        <i class="fa-brands fa-square-instagram fa-xl" id="idinstagram"></i>
        <i class="fa-brands fa-facebook fa-xl" id="idfacebook"></i>
        <i class="fa-brands fa-youtube fa-xl" id="idyoutube"></i>
        <i class="fa-brands fa-twitter fa-xl" id="idtwitter"></i>
        <i class="fa-brands fa-linkedin fa-xl" id="idlinkedin"></i>
        <i class="fa-brands fa-github fa-xl" id="idgithub"></i>
        <i class="fa-brands fa-stack-overflow fa-xl" id="idstackoverflow"></i>
        <i class="fa-brands fa-twitch fa-xl" id="idtwitch"></i>
    </span>
</div>
`;

