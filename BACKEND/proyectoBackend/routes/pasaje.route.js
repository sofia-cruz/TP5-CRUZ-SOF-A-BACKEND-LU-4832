//defino controlador para el manejo de CRUD
const pasajeCtrl = require('./../controllers/pasaje.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de pasaje
router.post('/', pasajeCtrl.createPasaje);
router.get('/', pasajeCtrl.getPasajes);
router.delete('/:id', pasajeCtrl.deletePasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.get('/pasajeros', pasajeCtrl.filterByCategoria);
router.get('/:id', pasajeCtrl.getPasaje);

//exportamos el modulo de rutas
module.exports = router;