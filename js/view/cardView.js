

function processPokemon(results) {
  let body = $('#mainDiv');
  body.empty();

  let name = results.name;

  let nameImg = name.toLowerCase();

  let URL = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/images/${nameImg}.jpg`;

  let card = `<div class="card" id="zeca" style="width: 18rem;">
             <div class="imageDiv">
             <img src="${URL}" class="card-img-top" alt="${name}">
             </div>

        <div class="card-body">
            <center> <h5 class="card-title">${name}</h5> </center><p></p>
            <p class="card-text">${results.info.description}</p>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${results.info.id}</li>
            <li class="list-group-item">Type: <div class="type-icon type-${results.info.type}">${results.info.type}</div></li>
            <li class="list-group-item">Weakness: <div class="type-icon type-${results.info.weakness}">${results.info.weakness}</div></li>
        </ul>

        <div class="card-body">

        <center>
            <a onclick="window.open('https://www.pokemon.com/us/pokedex/${name}')" class="card-link">More info</a>
            <a onclick="window.open('https://streamable.com/lf027o?src=player-page-share')" style="color: red" class="card-link">DON'T CLICK</a>
        </center>

        </div></div>`;
        
  body.append(card);

}

/* $('#searchIcon').on('click', function () {
    init();
    document.getElementById('userInput').value = '';
  }); */

export { processPokemon };
