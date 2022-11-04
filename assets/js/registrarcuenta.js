  var cuenta= {     
     usuario:"",
     apellido: "",
     nombre: "",
     email: "",
     fecha: "",
     contraseña: ""  
    } 

  function obteneredad (fechanacimiento) {
    const fechaactual= new Date()
    const añoactual= (fechaactual.getFullYear())
    const mesactual= (fechaactual.getMonth()) + 1
    const diaactual= (fechaactual.getDate())
 
    const añonacimiento= parseInt(String(fechanacimiento).substring(0,4))
    const mesnacimiento= parseInt(String(fechanacimiento).substring(5,7))
    const dianacimiento= parseInt(String(fechanacimiento).substring(8,10))
     
    let edad= añoactual - añonacimiento
    
    if (mesactual < mesnacimiento) 
      {edad--}
    else 
    {
     if (mesactual == mesnacimiento) 
        {
         if (diaactual < dianacimiento) {edad--}
        }
    }    
    return edad
  }
 
  function validarusuario (cuentas, usuario) {            
     for (x=0; x<cuentas.length; x++) {                        
            if ((cuentas[x].usuario) == usuario)
               { return true }                     
         }  
     }
 
   function validarcontraseña (clave) {    
    if (clave.length<8)  
        return true;
    } 
 
   function cargarcuenta () {
    cuenta.apellido= document.getElementById('apellido').value
    cuenta.nombre= document.getElementById('nombre').value
    cuenta.email= document.getElementById('email').value
    cuenta.fecha= document.getElementById('fechanac').value
    cuenta.usuario= document.getElementById('usuariod').value
    cuenta.contraseña= document.getElementById('claved').value
   }
   
   const formulariod= document.getElementById('formregistrarcuenta') 
   formulariod.addEventListener('submit', function (eventor) {

    eventor.preventDefault();
    
        if (localStorage) 
             {                                 
                   //Si el local storage no está vacio entonces...               
                   if (localStorage.getItem("Cuentas") != undefined)
                       {                         
                        //Validamos los valores ingresados en el formulario
                        let edad= obteneredad(document.getElementById('fechanac').value)
                        var cuentasjson= localStorage.getItem("Cuentas")//formato json   
                        var cuentas=JSON.parse(cuentasjson)                                           
                        var usuario=document.getElementById('usuariod').value
                        let vusuario=validarusuario(cuentas, usuario)
                        let vclave= validarcontraseña(document.getElementById('claved').value)
                            
                        if ((edad < 18) || (vusuario==true) || (vclave==true))  {
                        alert("ERROR EN EL INGRESO DE DATOS, Por favor verifique: \n")
                        if (edad < 18) alert("* Su edad debe ser igual o mayor a los 18 años \n" )
                        if (vusuario) alert("* El usuario ya existe en el sistema. Deberá proponer otro nombre de usuario \n")
                        if (vclave) alert("* La contraseña debe tener como mínimo 8 (ocho) caracteres... \n")    
                        return       
                        }     
                    
                        cuentasjson= localStorage.getItem("Cuentas")//cadena de strings en JSON                       
                        cuentas= JSON.parse(cuentasjson)
                                                
                        cargarcuenta()                                          
                        cuentas.push(cuenta); //Agregamos la nueva cuenta a las cuentas existentes
                       
                        let cadenajson= JSON.stringify(cuentas)
                        localStorage.setItem("Cuentas", cadenajson)
                        
                        alert ("FELICITACIONES: Su cuenta ya ha sido creada en el sistema...")
                        this.submit();  
                        }                                                                
                                                 
                    else 
                         { //el local storage esta vacio    
                         
                         let edad= obteneredad(document.getElementById('fechanac').value)
                         let vclave= validarcontraseña(document.getElementById('claved').value)
                                
                         if ((edad < 18) || (vclave==true))  {
                           alert("ERROR EN EL INGRESO DE DATOS, Por favor verifique: \n")
                           if (edad < 18) alert("* Su edad debe ser igual o mayor a los 18 años \n" )
                           if (vclave) alert("* La contraseña debe tener como mínimo 8 (ocho) caracteres... \n")    
                           return       
                           }                                     

                         let array=[]
                         cargarcuenta()

                         array.push(cuenta)
                         let cadenajson= JSON.stringify(array)
                         localStorage.setItem("Cuentas", cadenajson)
                         alert ("FELICITACIONES: Su cuenta ya ha sido creada en el sistema...")
                         this.submit();  
                        } 
             }                 
    })     