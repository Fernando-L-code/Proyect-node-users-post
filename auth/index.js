const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret)
}

const check={
    own: function(req, owner){
        const decoded = decodeHeader(req);
        console.log("decoded owner");
        console.log(decoded);
        console.log(owner);
        // COMPROBAR SI ES O NO PROPIO
        if(decoded.id !== owner){
            throw error('No tienes permitido estas acciones',401);
            // throw new Error('No tienes permitido estas acciones')
            return (true);
        }
    },
    logged: function(req, owner){
        const decoded = decodeHeader(req);
    },

}

function getToken(auth){
    //
    if(!auth){
        console.log("autenticacion");
        throw error('No viene token', 401);
        // throw new Error('No viene token')
    }

    if(auth.indexOf('Bearer ') === -1){
        throw error('Formato invalido', 401);
        // throw new Error('Formato invalido')
    }

    let token = auth.replace('Bearer ','');

    return token;
}

function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    // console.log("decode header");
    
    // console.log("1.-"+authorization);
    // console.log("2.-"+req.headers.authorization);
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};