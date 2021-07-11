// este archivo exporta un middleware

const auth = require('../../../auth')
module.exports = function checkAuth(action){
    function middleware(req, res, next){
        switch(action){
            case 'update':
                // esto es para comprobar que el usuario que quiere editar es el mismo que lo publico
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;
            case 'follow':
                // esto es para comprobar que el usuario que quiere editar es el mismo que lo publico
                auth.check.logged(req);
                next();
                break;
                
            default:
                next();
        }
    }

    return middleware;
}