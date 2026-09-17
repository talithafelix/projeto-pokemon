//import { getPokemonImage } from "./index.js";

async function carregaListaPokemons() {
    //voltar para <=300 após fazer a paginação
    for (var i = 1; i <= 16; i++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        const pokemonContainer = document.querySelector(".pokemon-container");
        // <div class="pokemonInfo">
        pokemonContainer.innerHTML += `
       
        <section class="card">
            <img id="sprite" src="" alt="Sprite do Pokemon">
            <div id="abilities"></div>
            
            <div>
                <h1 id="name">Nome:${data.name}</h1>
                <p id="height">Altura: ${data.height} m</p>
                <p id="weight">Peso: ${data.weight} kg</p>
            </div>

        </section>
        `;

       // await getPokemonImage(data.id);
    }
}


document.addEventListener("DOMContentLoaded", () => {

    carregaListaPokemons();

});

