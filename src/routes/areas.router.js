const {Router}= require('express');

const router = Router();

const areasController = 
require('../controllers/areas.controller');

//Consultar todos los empleados
router.get('/areaconocimiento',areasController.getAreas);
//Consultar empleado
router.get('/areaconocimiento/:id',areasController.getAreas);
//Crear empleado
router.post('/areaconocimiento',areasController.createAreas);
//Actualizar empleado
router.put('/areaconocimiento/:id',areasController.editAreas);
//Eliminar empleado
router.delete('/areaconocimiento/:id',areasController.deleteAreas);

module.exports= router;