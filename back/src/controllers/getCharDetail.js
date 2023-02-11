const axios = require("axios");

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(info => info.data)
    .then(data => {
        let character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character))
    })
    .catch(err => {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(err.message)
    })
}


module.exports = getCharDetail;