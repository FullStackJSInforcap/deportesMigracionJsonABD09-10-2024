const express = require('express');

class Server {

    constructor() {
        this._app = express();
        this._port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this._app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this._app.use('/deportes', require('../routes/deportes'));
    }

    listen() {
        this._app.listen(this._port, () => {
            console.log(`Escuchando en el puerto ${this._port}`);
        });
    }

}

module.exports = Server;