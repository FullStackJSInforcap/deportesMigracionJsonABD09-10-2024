const { request, response } = require('express');
const { findAll, findById, insert, update, deleteById } = require('../service/deportes');

const findAllController = async (req = request, res = response) => {
    const respuesta = await findAll();
    res.render('index', {
        respuesta
    });
}

const findByIdController = async (req = request, res = response) => {
    const id = req.query.id;
    const respuesta = await findById(id);
    res.render('index', {
        respuesta
    });
}

const preInsertController = (req = request, res = response) => {
    res.render('insert');
}

const insertController = async (req = request, res = response) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const respuesta = await insert(nombre, precio);
    res.render('index', {
        respuesta
    });
}

const preUpdateController = async (req = request, res = response) => {
    const id = req.query.id;
    const respuesta = await findById(id);
    respuesta.deportes = respuesta.deportes[0];
    res.render('update', {
        respuesta
    });
}

const updateController = async (req = request, res = response) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const respuesta = await update(id, nombre, precio);
    res.render('index', {
        respuesta
    });
}

const deleteByIdController = async (req = request, res = response) => {
    const id = req.query.id;
    const respuesta = await deleteById(id);
    res.render('index', {
        respuesta
    });
}

module.exports = {
    findAllController,
    findByIdController,
    preInsertController,
    insertController,
    preUpdateController,
    updateController,
    deleteByIdController
}