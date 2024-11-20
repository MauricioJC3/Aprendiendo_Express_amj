const express = require('express');
const router = express.Router(); //express nos ofrece la gestion de rutas
const EmpresasController = require('../../app/controllers/empresasController');

router.get('/', EmpresasController.consultar);

router.post('/', EmpresasController.ingresar);

// Gracias a express puedo hacer que las rutas que necesiten un una variable un id en este caso
// pasen por aqui y no neceisto agregarle a cada una una ruta de '/:id' mejorando el codigo
// con esto espera si o si un id en la ruta o na variable
router.route('/:id')
    .get(EmpresasController.consultarDetalle)
    .put(EmpresasController.actualizar)
    .delete(EmpresasController.eliminar);

module.exports = router;
