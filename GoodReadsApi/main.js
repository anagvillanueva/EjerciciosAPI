//Ejecuto lo que viene de Authors

const goodReadsCrud = require ('./Authors.js')

//Listando todos los autores
//goodReadsCrud.listAuthors()

//Consultando un autor por ID
//goodReadsCrud.getAuthorByID(14732)

/*const jsonSend = {
    name: "Rene",
    last_name: "Manzano",
    nacionalidad: "MX",
    biography:"Programmer",
    gender: "M",
    age: 23, 
    is_alive: true
}
goodReadsCrud.createAuthor(jsonSend)*/

/*const updateData = {
    name:"Fernanda",
    last_name: "Villanueva"
}

goodReadsCrud.patchAuthor(14737)*/

//Eliminar autor
goodReadsCrud.deleteAuthor(14568) 