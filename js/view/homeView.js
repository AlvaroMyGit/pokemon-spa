import { navigate } from '/js/router.js';

function showHome() {
  var body = $('#mainDiv');
  body.empty();

  var logo = `<img src="resources/logoPokemon.png" alt="logo.png" id="logo">`

  var ashImage = `<img id='ash' src='/resources/ash-walking.gif'>`;

  body.append(logo);
  body.append(ashImage);
}

$('#homePokeball').on('click', function cleanPage() {
  showHome();
  document.getElementById('userInput').value = '';
});

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});


const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

$('#userInput').on('keypress', function (e) {
  if (e.which === 13) {
    let pokemonName = $('#userInput').val();
    window.location.hash = (`/pokemon/${pokemonName}`);
    $('#userInput').val(''); // Clear the input
  }
});



export default { showHome };
