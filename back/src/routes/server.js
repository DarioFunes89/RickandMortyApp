const http = require("http");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const data = require("../utils/data.js");

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    let id = req.url.split("/").at(-1);

    if(req.url.includes("onsearch")){
        getCharById(res, id);
    }

    if(req.url.includes("detail")){
        getCharDetail(res, id);
    }
}
).listen(3001, () => {
    console.log("server levantado");
});

