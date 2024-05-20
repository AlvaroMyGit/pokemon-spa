import notFoundView from '/js/view/notFoundView.js';

function fetchPokemon(name, cb) {
  console.log(name);
  let URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=' +
    name;

  console.log(`Fetching URL: ${URL}`); // Debug log
  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: cb,
    error: function(err) {
      console.error(`Error fetching Pokémon: ${name}`, err); // Debug log
      notFoundView.showView();
    }
  });
}



function fetchName(cb, name) {
  let URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=' +
    name;

  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: cb,
    error: notFoundView.showView,
  });
}

export { fetchPokemon, fetchName };
