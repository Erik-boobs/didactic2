const {Router}= require('express');

const router = Router();

const cursosController = 
require('../controllers/cursos.controller');

//Consultar todos los empleados
router.get('/curso',cursosController.getCursos);
//Consultar empleado
router.get('/curso/:id',cursosController.getCursos);
//Crear empleado
router.post('/curso',cursosController.createCursos);
//Actualizar empleado
router.put('/curso/:id',cursosController.editCursos);
//Eliminar empleado
router.delete('/curso/:id',cursosController.deleteCursos);

module.exports= router;