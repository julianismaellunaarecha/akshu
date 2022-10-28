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
<div id="idbanner">
    <a href="index.html"><span id="idprueba">Pagina de prueba para TPO</span></a>
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
                    <h1>Akshu</h1>
                </a>
            </div>
        </div>
        <div id="idsearchform">
            <form>
                <input type="text" placeholder="Buscar producto o servicio" id="idinputform">
                <button type="submit" id="idbuttonform" aria-label="Buscar">
                    <img id="idimgbusqueda" src="assets/icons/searchicongoogle.svg" alt="Imagen de una lupa que permite buscar productos o servicios tecnológicos provistos por Akshu">
                </button>
            </form>
        </div>
    </div>
            <button class="openmenu" aria-label="Desplegar menú">
                <img src="assets/img/mburguer.png" alt="Desplegar menú">
            </button>        
    <div id="idmenu">
        <ol>
            <button class="closemenu" aria-label="Cerrar menú">
                <img src="assets/img/close.png" alt="Cerrar menú">
            </button>      
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
                <a href="servicios.html">Servicios</a>
            </li>
            <li id="idnavlineitem">
                <a href="contacto.html">Contacto</a>
            </li>
            <li id="idnavlineitem">
                <a href="carrito.html"><span>Carrito</span><i class="fa-solid fa-cart-shopping"></i></a>
                <ol class="cart collapsible">
                    <li>
                        <div class="cart-products" id="idcartproducts"></div>
                    </li>                   
                </ol>
            </li>
        </ol>
    </div>
</nav>
`;

document.getElementById("idfooter").innerHTML = `
<div id="idfootercontainer">
    <span class="hidden">akshu@bue.com.ar</span>
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