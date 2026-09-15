//const pokemonName = process.argv[2];//usado no node para pegar o nome do pokemon digitado no terminal

const btnBuscar = document.querySelector("#buscar");
const btnAleatorio = document.querySelector('#aleatorio');
const inputPokemonName = document.querySelector("#pokemonName");
const imagens = document.querySelector("#gif");


async function getPokemon() {
    const pokemonName = document.querySelector("#pokemonName").value
        .trim()
        .toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    
    const pokemonContainer = document.querySelector(".pokemon");

    if (!response.ok) {

        pokemonContainer.classList.add("hidden");
        window.alert("Pokemon não encontrado!!");
        return;

    }

    const data = await response.json();

        document.querySelector("#height").innerHTML = `Altura: ${data.height} m`;
        document.querySelector("#weight").innerHTML = `Peso: ${data.weight} kg`;
        document.querySelector("#name").innerHTML = `Nome: ${capitalizeFirstLetter(data.name)}`;


        pokemonContainer.classList.remove("hidden");

    /*
        if (pokemonContainer.classList.contains("hidden")) {
            pokemonContainer.classList.remove("hidden");
        }
    */

    let imagem = await getPokemonImage(data.id);

    if (!imagem) {
        document.querySelector("#sprite").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
    } else {
        document.querySelector("#sprite").src = imagem;
    }



    // Display abilities
    const abilitiesContainer = document.querySelector("#abilities");
    abilitiesContainer.innerHTML = "<h2>Habilidades:</h2>";
    data.abilities.forEach(ability => {
        const abilityName = capitalizeFirstLetter(ability.ability.name);
        abilitiesContainer.innerHTML += `<div class="ability">${abilityName}</div>`;
    });

    //console.log(data.id);
    //console.log(data.name);
    //console.log("Botão clicado!");
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    // Handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getPokemonImage(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data.sprites.versions['generation-ix']['scarlet-violet'].front_default;
}

async function aleatorio(retorno = "nome ou id") {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300");
    const dados = await response.json();

    const indice = Math.floor(Math.random() * dados.results.length);
    const url = dados.results[indice].url;
    const pokemonSorteado = dados.results[indice].name;
    const pokemonId = url.split("/").filter(Boolean).pop();


    if (retorno == "nome") {
        return pokemonSorteado;
    } else if (retorno == "id") {
        return pokemonId;
    } else {
        return "Não foi informado se era nome ou id ao chamar aletorio()"
    }

}

async function gif() {
    let id = await aleatorio("id");
    //let id = 99;
    let imagem = await getPokemonImage(id);
    if (!imagem) {
        imagens.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
    } else {
        imagens.src = imagem;
    }
}

// Função responsável por trocar a imagem continuamente
async function iniciarGif() {

    // Loop infinito: ficará executando até a página ser fechada
    while (true) {

        // Executa a função que busca um Pokémon aleatório
        // e atualiza a imagem na tela
        await gif();

        // Aguarda 1 segundo (1000 ms) antes de executar novamente
        // new Promise cria uma promessa que será concluída
        // após o tempo definido pelo setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", () => {

    // Inicia a troca automática dos GIFs
    iniciarGif();

});


// Pokemon API Example
btnBuscar.onclick = async function () {
    await getPokemon();
}

btnAleatorio.onclick = async function () {
    let pokemonSorteado = await aleatorio("nome");
    document.querySelector("#pokemonName").value = pokemonSorteado;
    await getPokemon();

}

inputPokemonName.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        await getPokemon();
    }
});

