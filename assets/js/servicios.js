const reparamos= ["Computadoras de escritorio", "Notebooks", "Tablets", "Celulares", "Teléfonos IP"];
const armamos= ["Computadoras de escritorio", "Notebooks", "Tablets", "Conexiones de red", "Celulares"];
const mantenemos= ["Software", "Aplicaciones para celular", "Aplicaciones remotas", "Productos armados", "Telefonos IP"]; 
const totalservicios=5
     
    function agregarfila (ifila) {
    
    var tabla= document.querySelector(".tabla")
    var fila = document.createElement("div")

    fila.className="filas"
              
           for (col=0; col<3; col++) {
        
              var columna = document.createElement("div");
              columna.className="columnas"
       
              if (col==0) columna.innerHTML = "<span class=vinietas> ► </span>" + reparamos[ifila]
              if (col==1) columna.innerHTML = "<span class=vinietas> ► </span>" + armamos[ifila]
              if (col==2) columna.innerHTML = "<span class=vinietas> ► </span>" + mantenemos[ifila]                 
       
              fila.appendChild(columna)      
             }                      
     tabla.appendChild(fila) 
    }

    //agrego tantas filas como servicios con los que contamos
    for (i=0; i<totalservicios; i++)
     {
     agregarfila(i)
     }
