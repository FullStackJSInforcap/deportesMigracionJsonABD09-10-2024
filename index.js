const { findAll, findById, update, insert, deleteById } = require("./service/deportes");

deleteById('3').then((datos) => {
    console.log(datos);
    
});