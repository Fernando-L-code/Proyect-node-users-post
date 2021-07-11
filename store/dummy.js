const db = {
        'user':[
            {id:'1', name: 'luis'},
            {id:'2', name: 'luis'},
            {id:'3', name: 'luis'},
            {id:'4', name: 'luis'},
        ],
};

// convertimos a funciones asincronas para que se conviertar en una prometa y cachear error mas facil
async function list(tabla) {
    return db[tabla] || [];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }

    db[tabla].push(data);

    console.log(db);
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    // console.log(Object.keys(q));
    // console.log(key);
    // console.log(q);
    // console.log(col);
    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};
