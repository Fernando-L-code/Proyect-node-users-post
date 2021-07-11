const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response')
const Controller = require('./index');

const router = express.Router();


// Routes
router.get('/', list);
router.get('/:id', get);
router.get('/user/:id', getByUser);
router.post('/', upsert);
router.put('/', secure('update'), upsert);

//functions

function list(req,res,next){
    Controller.list()
        .then(data=>{
            response.success(req,res,data,200);
        })
        .catch(next);
}
function get(req, res,next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}
function getByUser(req, res,next) {
    Controller.getByUser(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}


function upsert(req, res,next) {
    console.log(req);
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}

module.exports = router;