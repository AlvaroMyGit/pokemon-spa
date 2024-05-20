import { fetchPokemon } from '/js/service/cardService.js';
import { processPokemon } from '/js/view/cardView.js';

function init() {
  // Function to extract the Pokémon name from the URL hash
  function getPokemonNameFromHash() {
    const path = window.location.hash;
    return path.split('/')[2]; // Extract the Pokémon name from the URL
  }

  const pokemonName = getPokemonNameFromHash();
  if (pokemonName) {
    console.log(`Fetching Pokémon: ${pokemonName}`); // Debug log
    fetchPokemon(pokemonName, processPokemon);
  } else {
    console.log("No Pokémon name found in URL hash."); // Debug log
  }
}

export default { init };

