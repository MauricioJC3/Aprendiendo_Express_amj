class ProductosController {
    constructor() {

    }

    // Todos los métodos que se utilizan en la ruta tienen dos parámetros req, res 
    consultar(req, res) {
            res.json({msg: 'consulta de productos'});
    }

    consultarDetalle(req, res) {
        res.json({msg: 'consulta de un producto'});
    }

    ingresar(req, res) {
        res.json({msg: 'ingresar un producto'});
    }

    actualizar(req, res) {
        res.json({msg: 'actualizar un producto'});
    }

    eliminar(req, res) {
        res.json({msg: 'eliminar un producto'});
    }

}

// nueva instancia de la clase
module.exports = new ProductosController();