function showList(results) {
  var list = results.split(/[\n:]/);

  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var pokeTable = `<div id="pokeTable"></div>`;

  mainDiv.append(pokeTable);

  for (let i = 0; i < list.length; i = i + 2) {
    
    let pokemonName = list[i + 1];

    let pokeDiv = `<div class="nameImg" id="${pokemonName}"></div>`;

    $('#pokeTable').append(pokeDiv);

    let pokeName = `<div>${list[i]}</div>`;
    let pokeImg = `<div><a href="#/pokemon/${pokemonName}" id="${pokemonName}">
                   <img src="https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${pokemonName}.png"></a></div>`;

    $(`#${pokemonName}`).append(pokeName);
    $(`#${pokemonName}`).append(pokeImg);

      document.getElementById(pokemonName).addEventListener('click', function () {
    });  
  }
}

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});

export { showList };
