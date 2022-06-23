
async function getPokemon(id){ 
    
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`) //Endpoint, PokeApi 
    const data = await response.json()
    return data
}

async function init(){
    const pokemon = await getPokemon()
    updatePokemon(pokemon)
}
init()

function updatePokemon(pokemon){
    window.pokeimg.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    window.pokemonName.textContent = pokemon.name
    window.id.textContent = pokemon.id
    window
    window.experiencia.textContent = pokemon.base_experience
    
}

window.search.addEventListener('change', async() =>{
    const pokemon = await getPokemon(window.search.value)
    updatePokemon(pokemon)
})