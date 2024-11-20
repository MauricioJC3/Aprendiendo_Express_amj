const express = require('express');
const router = express.Router(); //express nos ofrece la gestion de rutas
const ProveedoresController = require('../../app/controllers/proveedoresController');



router.get('/', ProveedoresController.consultar);

router.post('/', ProveedoresController.ingresar);

// Gracias a express puedo hacer que las rutas que necesiten un una variable un id en este caso
// pasen por aqui y no neceisto agregarle a cada una una ruta de '/:id' mejorando el codigo
// con esto espera si o si un id en la ruta o na variable
router.route('/:id')
    .get(ProveedoresController.consultarDetalle)
    .put(ProveedoresController.actualizar)
    .delete(ProveedoresController.eliminar);

module.exports = router;
