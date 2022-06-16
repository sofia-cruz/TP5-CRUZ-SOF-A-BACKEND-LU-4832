//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de transaccion
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/filterbyEmail', transaccionCtrl.getClienteTransacciones);
router.get('/filterbyDivisas', transaccionCtrl.getDivisasTransacciones);

//exportamos el modulo de rutas
module.exports = router;