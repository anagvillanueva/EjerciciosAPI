// Endpoint: https://pokeapi.co/api/v2/pokemon

// Traemos nuestro request
const request = require('request');

//Declaramos URI de mi API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

function getPokemonByName(name){
    //Buena practica, sensible a mayus-minus
    request.get(URI + name, function(error, response, body){
        //validacion 
        if(response.statusCode === 200){
            //parse convierte el JSON a objeto JS
            const bodyEnFormatoJs = JSON.parse(body);

            const typePokemon = bodyEnFormatoJs.types.map(
            (objeto)=> objeto.type.name)
            console.log(`El tipo ${name} es ${typePokemon}`)
        }else{
            console.log(`Ocurrio un error ${response.statusCode} ${response.statusMessage}`)
        }
    });





}

