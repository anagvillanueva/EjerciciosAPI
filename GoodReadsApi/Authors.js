// Goodreads Api: https://goodreads-devf-aaron.herokuapp.com/docs/
// URI de mi API: https://goodreads-devf-aaron.herokuapp.com/api/v1/


const request = require ('request')

const URI = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

const listAuthors = () => {
    request.get(URI, (error, response, body) =>{
        if(response.statusCode === 200){
            const authors = JSON.parse(body)
            console.log(authors)
        }else{
            console.log(response.statusCode, response.statusMessage)
        }
    })

}


//read author
const getAuthorByID = (id) => {
    request.get(URI+id +'/',(error, response, body)=>{
        if (response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
        }else{
            console.log("ID NO VALIDO: ", response.statusCode, response.statusMessage)
        }
    })
}


//create author
const createAuthor = (jsonData) => {
    const objConfig = {
        url: URI, // apartado para el autor 
        form: jsonData // Mi data en formato JSON
    }
    request.post(objConfig, (error, response, body)=>{
        if(response.statusCode === 201){
            const author = JSON.parse(body)
            console.log("AUTOR CREADO EXITOSAMENTE", author)
        }else{
            console.log(response.statusCode, response.statusMessage)
        }
    })
}

//update author
const patchAuthor = (id, jsonData) => {
    const objConfig = {
        url: URI+id+'/',
        form: jsonData
    } 
    request.patch(objConfig, (error,response,body) => {
        if(response.statusCode === 200){
            const author = JSON.parse(body)
            console.log(author)
        }else {
            console.log(response.statusCode , response.statusMessage)
                
        }
    })

}

// Eliminar autor
const deleteAuthor = (id) => {
    request.delete (URI+id+'/' , (error, response, body) => {
        if(response.statusCode === 204){
            console.log("EL AUTOR HA SIDO ELIMINADO EXITOSAMENTE")
        }else {
            console.log(response.statusCode, response.statusMe
        }
    })
}


module.exports = {
    listAuthors,
    getAuthorByID,
    createAuthor,
    patchAuthor,
    deleteAuthor
}