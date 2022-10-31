async function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    const results = JSON.stringify(formJSON, null, 2);
    const response = await fetch("https://akshu.ar/juicylimemessenger/mongocontroller/message", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: results,
    });
    response.json().then(res => {
        document.getElementById("idformcontacto").innerHTML = `
        <div>Su mensaje ha sido enviado.</div>
        <div>Codigo de verificacion: ${res.id}</div>
        `
    });
}

function validate() {
    let phoneRegx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/ ;
    let nameRegx = /^[a-zA-Z ]{2,30}$/ ;
    let emailRegx = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i ;
    let asuntoRegx = /^(?=.{0,50}$)\d+(-?\d+)?$/ ;
    let mensajeRegx = /^(?=.{0,1200}$)\d+(-?\d+)?$/ ;
    if(!document.mensaje.sourcePhone.value.match(phoneRegx)) {
       alert( "Por favor corregi tu telefono." );
       document.mensaje.sourcePhone.focus() ;
       return false;
    }
    if(!document.mensaje.sourceLastName.value.match(nameRegx)) {
        alert( "Por favor corregi tu apellido." );
        document.mensaje.sourceLastName.focus() ;
        return false;
     }
     if(!document.mensaje.sourceFirstName.value.match(nameRegx)) {
        alert( "Por favor corregi tu nombre." );
        document.mensaje.sourceFirstName.focus() ;
        return false;
     }
     if(!document.mensaje.sourceEmail.value.match(emailRegx)) {
        alert( "Por favor corregi tu email." );
        document.mensaje.sourceEmail.focus() ;
        return false;
     }
     if(!document.mensaje.sourceMessageTitle.value.match(asuntoRegx)) {
        alert( "El asunto no debe tener mas de 50 caracteres." );
        document.mensaje.sourceMessageTitle.focus() ;
        return false;
     }
     if(!document.mensaje.sourceMessage.value.match(mensajeRegx)) {
        alert( "El mensaje no debe tener mas de 1200 caracteres." );
        document.mensaje.sourceMessage.focus() ;
        return false;
     }
    return( true );
 }

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
