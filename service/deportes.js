const { v4: uuidv4 } = require('uuid');
const conexion = require('../data/conexion');

const findAll = async () => {
    try {
        const clientBD = conexion();
        await clientBD.connect();
        const datos = await clientBD.query('SELECT * FROM deportes');
        const deportes = datos.rows;
        // if (deportes.length == 0) {
        if (datos.rowCount == 0) {
            return {
                msg: `No hay deportes`,
                deportes
            }
        }
        return {
            msg: `El listado de deportes es: `,
            deportes
        }
    } catch (error) {
        console.log(error);
        return {
            msg: `Error en el servidor`,
            deportes: []
        }
    }

}

const findById = async (id) => {
    try {

        const clientBD = conexion();
        await clientBD.connect();
        const query = {
            text: 'SELECT * FROM deportes WHERE id = $1',
            values: [id]
        }
        const datos = await clientBD.query(query);
        if (datos.rowCount == 0) {
            return {
                msg: `El deporte con id ${id} no existe`,
                deportes: datos.rows
            }
        }
        return {
            msg: `El deporte con id ${id} es:`,
            deportes: datos.rows
        }
    } catch (error) {
        console.log(error);
        return {
            msg: `Error en el servidor`,
            deportes: []
        }
    }
}

const insert = async (nombre, precio) => {
    try {
        const id = uuidv4();
        const clientBD = conexion();
        await clientBD.connect();
        const query = {
            text: 'INSERT INTO deportes(id, nombre, precio) VALUES($1, $2, $3)',
            values: [id, nombre, precio]
        }
        const respuestaInsert = await clientBD.query(query);
        const datos = await clientBD.query('SELECT * FROM deportes');
        if (respuestaInsert.rowCount == 0) {
            return {
                msg: `Deporte no insertado`,
                deportes: datos.rows
            }
        }
        return {
            msg: `Deporte insertado correctamente`,
            deportes: datos.rows
        }
    } catch (error) {
        console.log(error);
        return {
            msg: `Error en el servidor`,
            deportes: []
        }
    }

}

const update = async (id, nombre, precio) => {
    try {
        const clientBD = conexion();
        await clientBD.connect();
        const query = {
            text: 'UPDATE deportes SET nombre = $1, precio = $2 WHERE id = $3',
            values: [nombre, precio, id]
        }
        const respuestaUpdate = await clientBD.query(query);
        const datos = await clientBD.query('SELECT * FROM deportes');
        if(respuestaUpdate.rowCount == 0){
            return {
                msg: `El deporte con id ${id} no se actualizó`,
                deportes: datos.rows
            }    
        }
        return {
            msg: `El deporte con id ${id} se actualizó correctamente`,
            deportes: datos.rows
        }
    } catch (error) {
        console.log(error);
        return {
            msg: `Error en el servidor`,
            deportes: []
        }
    }
}

const deleteById = async (id) => {
    try {
        const clientBD = conexion();
        await clientBD.connect();
        const query = {
            text: 'DELETE FROM deportes WHERE id = $1',
            values: [id]
        }
        const respuestaDelete = await clientBD.query(query);
        const datos = await clientBD.query('SELECT * FROM deportes');
        if(respuestaDelete.rowCount == 0){
            return {
                msg: `El deporte con id ${id} no se eliminó`,
                deportes: datos.rows
            }
        }
        return {
            msg: `El deporte con id ${id} se eliminó correctamente`,
            deportes: datos.rows
        }
    } catch (error) {
        console.log(error);
        return {
            msg: `Error en el servidor`,
            deportes: []
        }
    }
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
}