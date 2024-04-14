// Variable initialization.
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
let cards = document.querySelector('#pokemon-cards');
let pokemon =[];
let inputDiv = document.querySelector('#input');
let enterButton = document.querySelector('#pokemon-input');

// Event to execute getPokemonList and iChooseYou upon clicking 'Enter' button.
enterButton.addEventListener("click", function() {
    getPokemonList();
    iChooseYou(pokemon);
    inputDiv.style.display = 'none';
});

// Main function that pulls Pokemon name, ID, and primary type from the API.
let iChooseYou = (poke) => {

    // For each Pokemon in the array, fetch their name, ID, primary type, and sprite.
    // Add appropriate colour styling for each Pokemon type.
    poke.forEach((poke) => {
        let json;
        fetch(apiUrl + poke)
            .then((response) => json = response.json())
            .then((data) => {
                let pokemonInfo = document.createElement('div');

                switch (data.types[0].type.name) {
                    case 'normal':
                        pokemonInfo.id = 'normal';
                        pokemonInfo.className = 'card';
                        break;
                    case 'fire':
                        pokemonInfo.id = 'fire';
                        pokemonInfo.className = 'card';
                        break;
                    case 'water':
                        pokemonInfo.id = 'water';
                        pokemonInfo.className = 'card';
                        break;
                    case 'grass':
                        pokemonInfo.id = 'grass';
                        pokemonInfo.className = 'card';
                        break;
                    case 'electric':
                        pokemonInfo.id = 'electric';
                        pokemonInfo.className = 'card';
                        break;
                    case 'ice':
                        pokemonInfo.id = 'ice';
                        pokemonInfo.className = 'card';
                        break;
                    case 'fighting':
                        pokemonInfo.id = 'fighting';
                        pokemonInfo.className = 'card';
                        break;
                    case 'poison':
                        pokemonInfo.id = 'poison';
                        pokemonInfo.className = 'card';
                        break;
                    case 'ground':
                        pokemonInfo.id = 'ground';
                        pokemonInfo.className = 'card';
                        break;
                    case 'flying':
                        pokemonInfo.id = 'flying';
                        pokemonInfo.className = 'card';
                        break;
                    case 'psychic':
                        pokemonInfo.id = 'psychic';
                        pokemonInfo.className = 'card';
                        break;
                    case 'bug':
                        pokemonInfo.id = 'bug';
                        pokemonInfo.className = 'card';
                        break;
                    case 'rock':
                        pokemonInfo.id = 'rock';
                        pokemonInfo.className = 'card';
                        break;
                    case 'ghost':
                        pokemonInfo.id = 'ghost';
                        pokemonInfo.className = 'card';
                        break;
                    case 'dark':
                        pokemonInfo.id = 'dark';
                        pokemonInfo.className = 'card';
                        break;
                    case 'dragon':
                        pokemonInfo.id = 'dragon';
                        pokemonInfo.className = 'card';
                        break;
                    case 'steel':
                        pokemonInfo.id = 'steel';
                        pokemonInfo.className = 'card';
                        break;
                    case 'fairy':
                        pokemonInfo.id = 'fairy';
                        pokemonInfo.className = 'card';
                        break;
                }

                console.log(data)
                if (data.types.length === 1) {
                    pokemonInfo.innerHTML = `<div id="pokemon-info">
                                            <h2>${data.name.toUpperCase()}</h2>
                                            <p>ID: ${data.id}</p>
                                            <p>${data.types[0].type.name.toUpperCase()}</p>
                                        </div>
                                        <img src=${data.sprites.front_default}>`
                } else {
                    pokemonInfo.innerHTML = `<div id="pokemon-info">
                                            <h2>${data.name.toUpperCase()}</h2>
                                            <p>ID: ${data.id}</p>
                                            <p>${data.types[0].type.name.toUpperCase()} / 
                                            ${data.types[1].type.name.toUpperCase()}</p>
                                        </div>
                                        <img src=${data.sprites.front_default}>`
                }


                cards.appendChild(pokemonInfo);

            })

    })

}

// Gathers user input from the webpage, or if user input is blank, chooses a random Pokemon for each card.
function getPokemonList() {
    pokemon = [
        document.querySelector('#pokemon-name1').value.toLowerCase(),
        document.querySelector('#pokemon-name2').value.toLowerCase(),
        document.querySelector('#pokemon-name3').value.toLowerCase(),
        document.querySelector('#pokemon-name4').value.toLowerCase(),
        document.querySelector('#pokemon-name5').value.toLowerCase(),
        document.querySelector('#pokemon-name6').value.toLowerCase(),
    ];

    if (!pokemon[0] && !pokemon[1] && !pokemon[2] && !pokemon[3] && !pokemon[4] && !pokemon[5]) {
        pokemon = [
            Math.floor((Math.random() * 1011)),
            Math.floor((Math.random() * 1011)),
            Math.floor((Math.random() * 1011)),
            Math.floor((Math.random() * 1011)),
            Math.floor((Math.random() * 1011)),
            Math.floor((Math.random() * 1011))
        ];

    }

    return pokemon;
}



