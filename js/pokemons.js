//import { getPokemonImage } from "./index.js";

async function carregaListaPokemons() {
    //voltar para <=300 após fazer a paginação
    for (var i = 1; i <= 10; i++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        const pokemonContainer = document.querySelector("#pokemon");
        pokemonContainer.innerHTML += `
        <section class="pokemon">
            <img id="sprite" src="" alt="Sprite do Pokemon">
            <div id="abilities"></div>
            
            <div class="pokemonInfo">
                <h1 id="name">Nome:${data.name}</h1>
                <p id="height">Altura: ${data.height} m</p>
                <p id="weight">Peso: ${data.weight} kg</p>
            </div>

        </section>`;

       // await getPokemonImage(data.id);
    }
}


document.addEventListener("DOMContentLoaded", () => {

    carregaListaPokemons();

});

