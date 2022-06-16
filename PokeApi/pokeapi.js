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
            
        }
    });





}
