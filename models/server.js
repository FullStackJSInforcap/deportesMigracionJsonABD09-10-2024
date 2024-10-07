const express = require('express');
const hbs = require('hbs');

class Server {

    constructor() {
        this._app = express();
        this._port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this._app.set('view engine', 'hbs');
        this._app.use(express.urlencoded({ extended: true }));
        hbs.registerPartials(__dirname.slice(0, -7) + '/views/partials');
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