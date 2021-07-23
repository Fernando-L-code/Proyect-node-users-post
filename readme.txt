las peticiones llegan a network luego al controlador y estas hacen el llamado a el store

peticion -> network -> controller -> store(db)


los micro servicios son llamados en el archivo -->[user/ index.js] como  [store] que requiere -> remote-mysql

Nombrar un servicio de pm2 con un tag
pm2 start post/index.js --name api-post