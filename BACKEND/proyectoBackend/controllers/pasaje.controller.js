const Pasaje = require('../models/pasaje');
const pasajeCtrl = {}

pasajeCtrl.createPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body)
    try {
        await pasaje.save()
        res.json({
            'status': '1',
            'msg': "Pasaje guardado.",
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

pasajeCtrl.getPasajes = async (req, res) => {
    try {
        const pasajes = await Pasaje.find().populate("pasajero")
        res.json(pasajes)
    } catch (error) {
        res.status(400).json({
            
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

pasajeCtrl.deletePasaje = async (req, res) => {
    try {
        await Pasaje.deleteOne({ _id: req.params.id });
        res.json({
            'status': '1',
            'msg': 'Pasaje removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

pasajeCtrl.editPasaje = async (req, res) => {
    const vpasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({ _id: req.body._id }, vpasaje);
        res.json({
            'status': '1',
            'msg': 'Pasaje updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

pasajeCtrl.filterByCategoria = async (req, res) => {
    try {
        const categoria = req.query.categoria;
        var pasajeros = await Pasaje.find({ categoriaPasajero: categoria }).populate("pasajero")
        res.json(pasajeros)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            'status': '0',
            'msg': "Error procesando la operación"
        })
    }
}

pasajeCtrl.getPasaje = async (req, res) => {
    try {
        const pasaje = await Pasaje.findById(req.params.id).populate("pasajero")
        res.json(pasaje)
    } catch (error) {
        res.status(400).json({
            
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}
module.exports = pasajeCtrl;