/* # Confs */
const URL_API = "https://zoo-animal-api.herokuapp.com/animals/rand";

$(document).ready(() => {
  getPagina("home.html", "main");
});

const getPokemonList = (offset = null, limit = null) => {};

// URL: https://pokeapi.co/api/v2/pokemon/
// https://zoo-animal-api.herokuapp.com/animals/rand
const getPokemon = () => {
  getPagina("getPokemon.html", "main");
  $.ajax({
    url: URL_API,
    dataType: "json",
    success: (data) => {
      let img1 = (document.getElementById(
        "#image-card1"
      ).src = `${data.image_link}`);
    },
  });
};
