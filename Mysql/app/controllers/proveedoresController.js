const db = require('../../database/conexion.js');

class ProveedoresController {
    constructor() {

    }

    // Todos los métodos que se utilizan en la ruta tienen dos parámetros req, res 
    consultar(req, res) {
            res.json({msg: 'consulta de proveedores'});
    }

    consultarDetalle(req, res) {
       const { id } = req.params; // desestructuracion
        res.json({msg: `consulta de un proveedor por id ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'ingresar un proveedor'});
    }

    actualizar(req, res) {
        res.json({msg: 'actualizar un proveedor'});
    }

    eliminar(req, res) {
        res.json({msg: 'eliminar un proveedor'});
    }

}

// nueva instancia de la clase
module.exports = new ProveedoresController();