const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getClienteTransacciones = async (req, res) => {
    try {
        const email = req.query.email;
        var transacciones = await Transaccion.find()

        if(email) transacciones = await Transaccion.find({emailCliente: email})
        res.json(transacciones)
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

transaccionCtrl.getDivisasTransacciones = async (req, res) => {
    try {
        const divisaOrigen = req.query.divisaOrigen;
        const divisaDestino = req.query.divisaDestino;
        var transacciones = await Transaccion.find()

        if(divisaOrigen && divisaDestino) transacciones = await Transaccion.find({
            $and: [
                {monedaOrigen: divisaOrigen},
                {monedaDestino: divisaDestino}
            ]
        })
        res.json(transacciones)
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}
module.exports = transaccionCtrl;