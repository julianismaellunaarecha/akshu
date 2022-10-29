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

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
