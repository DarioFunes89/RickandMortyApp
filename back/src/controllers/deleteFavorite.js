let  favs  = require('../utils/favs');

const deleteFavorite = (req, res) => {
    const { id } = req.params;
    try {
        if(id){
            let characterFiltered = favs.filter(charac => charac.id !== Number(id));
            if(characterFiltered.length !== favs.length){
                favs = characterFiltered;
                return res.status(200).json(favs)
            }
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = deleteFavorite;