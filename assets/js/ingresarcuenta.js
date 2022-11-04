//datos de cada cuenta en formato object de Java Script
var cuenta=   {     
     usuario:"",
     apellido: "",
     nombre: "",
     email: "",
     fecha: "",
    contraseña: ""  
   } 


const formulariou= document.getElementById('formingresarcuenta') 
   formulariou.addEventListener('submit', function (eventoi) {

    eventoi.preventDefault(); 

    //Validamos que la contrasenia cumpla con la condicion 
    let clave= document.getElementById('claveu').value;
    if (clave.length<8)                 
       {
        alert ("ERROR: La contraseña debe tener como mínimo 8 (ocho) caracteres...")
        return
       }  
    else 
       { 
        //Trabajamos con el storage, ya que más allá de no ser buena practica por el dato sensible de la contrasenia
        //se ejercita el manejo local de los datos para la validación y almacenamiento
        
        if (localStorage) 
             {                                 
                   //Si el local storage no está vacio entonces...               
                   if (localStorage.getItem("Cuentas") != undefined)
                       {
                         //Revisamos si el usuario no fue creado anteriormente 
                         //cuentdatonuevo.usuario=document.getElementById('usuariou').value
                         //datonuevo.contraseña=document.getElementById('claveu').value
                         var cuentasjson= localStorage.getItem("Cuentas")//formato json   
                         var cuentas=JSON.parse(cuentasjson)                                           
                         var usuario=document.getElementById('usuariou').value
                         totalcuentas=cuentas.length                                                                                        

                         for (x=0; x<totalcuentas; x++) {                         
                               if ((cuentas[x].usuario) == usuario)
                                  {                                   
                                    alert ("ERROR: El usuario ya existe...")
                                    this.submit();  
                                    return
                                  }                     
                        }  

                        //El usuario no está repetido, agregamos la cuenta a los datos locales 

                        cuentasjson= localStorage.getItem("Cuentas")//cadena de strings en JSON                       
                        cuentas= JSON.parse(cuentasjson)
                                                
                        cuenta.usuario=document.getElementById('usuariou').value
                        cuenta.contraseña=document.getElementById('claveu').value
                                          
                        cuentas.push(cuenta); //Agregamos la nueva cuenta a las cuentas existentes
                       
                        let cadenajson= JSON.stringify(cuentas)
                        localStorage.setItem("Cuentas", cadenajson)
                        
                        alert ("FELICITACIONES: Su cuenta ya ha sido creada en el sistema...")
                        this.submit();  
                        }                                                                
                                                 
                    else 
                        { //el local storage esta vacio, cargo los datos mínimos por primera vez
                          //el resto de los datos serán cargados por el usuario después desde el perfil                          
                         
                         let array=[]
                         cuenta.usuario= document.getElementById('usuariou').value
                         cuenta.contraseña= document.getElementById('claveu').value

                         array.push(cuenta)
                         let cadenajson= JSON.stringify(array)
                         localStorage.setItem("Cuentas", cadenajson)
                         alert ("FELICITACIONES: Su cuenta ya ha sido creada en el sistema...")
                         this.submit();  
                        } 
               }                       
        }    
    })        