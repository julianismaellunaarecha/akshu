async function handleFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log(event.targe);
    const data = new FormData(event.target);
    console.log(data);
    const formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
    const results = JSON.stringify(formJSON, null, 2);
    console.log(results);

    const response = await fetch("https://akshu.ar/juicylimemessenger/mongocontroller/message", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: results,
    });

    response.json().then(res => {
        console.log(res.id);
        document.getElementById("idformcontacto").innerHTML = `
        <div>Su mensaje ha sido enviado.</div>
        <div>Codigo de verificacion: ${res.id}</div>
        `
    });
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
