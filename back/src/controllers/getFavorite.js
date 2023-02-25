const  favs  = require('../utils/favs');

const getFavorite = (req, res) => {
    try {
        return res.status(200).json(favs)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports =  getFavorite