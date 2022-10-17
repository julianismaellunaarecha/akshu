function loadErrorStyles() {
  const tarjetaproductolinknode = document.createElement("link");
  tarjetaproductolinknode.setAttribute(
    "href",
    "../../assets/css/tarjetaproducto.css"
  );
  tarjetaproductolinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(tarjetaproductolinknode);

  const navigationbarlinknode = document.createElement("link");
  navigationbarlinknode.setAttribute(
    "href",
    "../../assets/css/navigationbar.css"
  );
  navigationbarlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(navigationbarlinknode);

  const carrousellinknode = document.createElement("link");
  carrousellinknode.setAttribute("href", "../../assets/css/carrousel.css");
  carrousellinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(carrousellinknode);

  const comunlinknode = document.createElement("link");
  comunlinknode.setAttribute("href", "../../assets/css/comun.css");
  comunlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(comunlinknode);

  const errorlinknode = document.createElement("link");
  errorlinknode.setAttribute("href", "../../assets/css/error.css");
  errorlinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(errorlinknode);

  const marcolinknode = document.createElement("link");
  marcolinknode.setAttribute("href", "../../assets/css/marco.css");
  marcolinknode.setAttribute("rel", "stylesheet");
  document.getElementById("idhead").appendChild(marcolinknode);
}

loadErrorStyles();

document.getElementById("idheader").innerHTML = `
<div id="idprueba">Pagina de prueba para TPO</div>
<div id="idbanner">
    <a href="../../ofertas.html">Hasta 35% de descuento en OFERTAS.</a>    
</div>
<nav id="idnav">
    <div id="idlogoandsearch">
        <div id="idlogocontainer">
            <div id="idlogo">
                <a href="index.html">
                    <img src="../../assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="../../index.html"> 
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
                    <img id="idimgbusqueda" src="../../assets/icons/searchicongoogle.svg" alt="Imagen de una lupa que permite buscar productos o servicios tecnológicos provistos por Akshu">
                </button>
            </form>
        </div>
    </div>
    <div id="idmenu">
        <ol>
            <li id="idnavlineitem">
                <a href="../../index.html">Inicio</a>
            </li>
            <li id="idnavlineitem">
                <a href="../../contacto.html">Contacto</a>
            </li>
        </ol>
    </div>
</nav>
`;

document.getElementById("idfooter").innerHTML = `
<div id="iderrorcomun" class="red-background">
    Si usted cree que esto es un error del servidor, por favor comuniqueselo al
    <a href="../../contacto.html">administrador del portal</a>.
</div>
<div id="idfootercontainer">
    <span id="idlogocontainer">
        <span id="idlogo">
            <a href="index.html">
                <img src="../../assets/icons/akshu.svg" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" id="idlogoimagen" href="../../index.html"> 
            </a>
        </span>
        <span id="idmarca">
            <a href="../../index.html">
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

document.getElementById("idmensajeerror").innerHTML = `
<div>
    <img src="../../assets/img/lolapuerta.jpg" alt=":)" id="idimagenlola">
</div>
<div class="marco">
    <p>Por favor</p>
    <p id="idnoabra"><span id="idnospan">No</span> abra la puerta.</p>
    <p id="idrestodeltexto">Puede haber una persona dentro,</p>
    <p id="idypodria">y podria ser usted.</p>
    <p id="idrestodeltexto">(Y eso generaria una paradoja <br>
        espacio-temporal que podria <br>
        acabar con el universo.)</p>
    <p>Gracias.</p>
</div>
`;
