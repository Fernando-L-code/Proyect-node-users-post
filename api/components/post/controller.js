const TABLA = 'post';
const auth = require('../auth');


module.exports = function (injectedStore) {

    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
        console.log("dummy");
    }

    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const post ={
            user: body.user,
            text: body.text,
        }


        if (body.id) {
            post.id = body.id;
        } else {
            post.id = nanoid();
        }

        if (body.user) {
            await auth.upsert({
                id: post.id,
                user: post.user,
                text: body.text,
            })
        }

        return store.upsert(TABLA, post);
    }

    return {
        list,
        get,
        upsert,
    }
}