export let categorias = [];

export function retrieveCategory(x) {
    switch (x) {
      case "electronics":
        return "electronicos";
      case "jewelery":
        return "joyeria";
      case "men's clothing":
        return "indumentariamasculina";
      case "women's clothing":
        return "indumentariafemenina";
      default:
        return "todo";
    }
  }
  
export function retrieveCategoryName(x) {
    switch (x) {
      case "electronics":
        return "Electronicos";
      case "jewelery":
        return "Joyeria";
      case "men's clothing":
        return "Indumentaria masculina";
      case "women's clothing":
        return "Indumentaria femenina";
      default:
        return "Todo";
    }
  }

export default class Categoria{
    constructor (category) {
        this.categorianombre = retrieveCategoryName(category);
        this.categoria = retrieveCategory(category);
	}
}

await fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((category) => {
      let categoria = new Categoria(category);
      categorias.push(categoria);
    });
  });