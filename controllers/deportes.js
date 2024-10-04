const { request, response } = require('express');
const { findAll, findById, insert, update, deleteById } = require('../service/deportes');

const findAllController = async (req = request, res = response) => {
    const respuesta = await findAll();
    res.send('findAllController: ' + respuesta.msg);
}

const findByIdController = async (req = request, res = response) => {
    const id = req.query.id;
    const respuesta = await findById(id);
    res.send('findByIdController: ' + respuesta.msg);
}

const insertController = async (req = request, res = response) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const respuesta = await insert(nombre, precio);
    res.send('insertController: ' + respuesta.msg);
}

const updateController = async (req = request, res = response) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const respuesta = await update(id, nombre, precio);
    res.send('updateController: ' + respuesta.msg);
}

const deleteByIdController = async (req = request, res = response) => {
    const id = req.query.id;
    const respuesta = await deleteById(id);
    res.send('deleteByIdController: ' + respuesta.msg);
}

module.exports = {
    findAllController,
    findByIdController,
    insertController,
    updateController,
    deleteByIdController
}