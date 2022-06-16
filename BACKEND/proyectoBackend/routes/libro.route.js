//defino controlador para el manejo de CRUD
const libroCtrl = require('./../controllers/libro.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de libro
router.post('/', libroCtrl.createLibro);
router.get('/', libroCtrl.getLibros);
router.delete('/:id', libroCtrl.deleteLibro);
router.put('/:id', libroCtrl.editLibro);
router.get('/destacados', libroCtrl.filterByDestacados);

//exportamos el modulo de rutas
module.exports = router;