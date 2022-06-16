/*console.log("Esto es otro ejemplo para consumir una API rest")

import fetch from "node-fetch"

const llave = "emKPSEx09x5H8pAdF6Fw5rqd3aRDqBp8dLIaBsVT"

let endpoint = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${llave}`

const respuesta = await fetch (endpoint)

const meteoritos = await respuesta.json()

Object.keys(meteoritos.near_earth_objects).forEach(object =>{
	const asteroides_cerca =meteoritos.near_earth_objects[object]
	asteroides_cerca.forEach(peligrosos=>{
		if (peligrosos.is_potentially_hazardous_asteroid === true){
			console.log(`El asteoide ${peligrosos.name}  es potencialmente peligroso, y va a pasar en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full} `)

		}
		else{
			console.log(`El asteoide ${peligrosos.name}  no representa ninguna amenaza`)
		}

	})
}) */

document.getElementById("fotodiv").innerHTML = <h1>`Conectado`</h1>
