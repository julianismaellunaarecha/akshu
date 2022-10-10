document.getElementById("idheader").innerHTML = `
<div id="idbanner">PUBLICIDAD ANIMADA DEL SITIO</div>
<nav id="idnav">
    <div id="idlogoandsearch">
        <div id="idlogo">
            <a href="index.html">
                <img src="assets/icons/akshu.png" alt="Imagen de una papa con el texto Akshu que representa la imagen de marca del sitio web" width="35" height="24" href="index.html"> 
            </a>
            <a href="index.html">
                Akshu
            </a>
        </div>
        <div id="idsearchform">
            <form>
                <input type="text" placeholder="Buscar producto o servicio" id="idinputform">
                <button type="submit"  id="idbuttonform">
                    <img src="assets/icons/searchicongoogle.svg" alt="Imagen de una lupa que permite buscar productos o servicios tecnológicos provistos por Akshu" width="12" height="12">
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
                <a href="cuenta.html">Cuenta</a>
            </li>
            <li id="idnavlineitem">
                <a href="carrito.html">Carrito</a>
            </li>
            <li id="idnavlineitem">
                <a href="contacto.html">Contacto</a>
            </li>
        </ol>
    </div>
</nav>
`

document.getElementById("idfooter").innerHTML = `
<div id="idderechos">
    © Grupo akshu - Todos los derechos reservados
</div>
`
