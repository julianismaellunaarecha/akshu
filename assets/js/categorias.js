fetch("https://fakestoreapi.com/products/categories")
.then((res) => res.json())
.then((json) => {
  let outputspans = ``
  json.forEach((element) => {
    outputspans += `
                <div class="categoria" id="idcategoria"> ${element}</div>
              `;
  })
  document.getElementById("idcategorias").innerHTML = outputspans;
});