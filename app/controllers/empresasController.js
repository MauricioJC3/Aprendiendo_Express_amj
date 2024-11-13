const db = require('../../database/conexion.js');


class EmpresasController {
    constructor() {

    }

    // Todos los métodos que se utilizan en la ruta tienen dos parámetros req, res 
    consultar(req, res) {
            res.json({msg: 'consulta de empresas'});
    }

    consultarDetalle(req, res) {
       const { id } = req.params; // desestructuracion
        res.json({msg: `consulta de un empresa por id ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'ingresar un empresa'});
    }

    actualizar(req, res) {
        res.json({msg: 'actualizar un empresa'});
    }

    eliminar(req, res) {
        res.json({msg: 'eliminar un empresa'});
    }

}

// nueva instancia de la clase
module.exports = new EmpresasController();