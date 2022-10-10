document.getElementById("idheader").innerHTML = `
<nav id="idnav">
    <div id="idlogoandsearch">
        <div id="idlogo">
            <a href="../../index.html">
                <img src="../../assets/icons/akshu.png" alt="akshu" width="35" height="24" href="../../index.html"> 
            </a>
            <a href="../../index.html">
                Akshu
            </a>
        </div>
        <div id="idsearchform">
            <form>
                <input type="text" placeholder="Buscar producto o servicio" id="idinputform">
                <button type="submit"  id="idbuttonform">
                    <img src="../../assets/icons/searchicongoogle.svg" alt="Buscar" width="12" height="12">
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
`

document.getElementById("idfooter").innerHTML = `
Si usted cree que esto es un error del servidor, por favor comuniqueselo al
<a href="../../contacto.html">administrador del portal</a>.
`

document.getElementById("idmensajeerror").innerHTML = `
<div>
    <img src="../../assets/img/lolapuerta.jpg" alt=":)" id="imagenlola">
</div>
<div>
    <p>Por favor</p>
    <p class="noabra"><span class="nospan">No</span> abra la puerta.</p>
    <p class="restodeltexto">Puede haber una persona dentro,</p>
    <p class="ypodria">y podria ser usted.</p>
    <p class="restodeltexto">(Y eso generaria una paradoja <br>
        espacio-temporal que podria <br>
        acabar con el universo.)</p>
    <p>Gracias.</p>
</div>
`