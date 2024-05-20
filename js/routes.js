export default {
    home: {
        path: "/",
        controller: "homeController",
    },
    pokemonList: {
        path: "/pokemonList",
        controller: "pokemonListController",
    },
    specialPokemons: {
        path: "/specialPokemon",
        controller: "specialPokemonController",
    },
    pokemon: {
        path: "/pokemon/:name",
        controller: "cardController",
    },
    about: {
        path: "/about",
        controller: "aboutController",
    },
    currentPath: {
        path: "",
        controller: "",
    },
};
