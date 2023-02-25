const { Router } = require("express");

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const router = Router();

router.get("/rickandmorty/character/:id", getCharById);
router.get( "/rickandmorty/detail/:id", getCharDetail);
router.get('/rickandmorty/fav', getFavorite);
router.post('/rickandmorty/fav', postFavorite);
router.delete('/rickandmorty/fav/:id', deleteFavorite);

module.exports = { router }