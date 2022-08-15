const express= require('express');
const router= express.Router();
const cursos= require('../models/cursos');
const areas= require('../models/areas')


//cursos
router.get('/curso',(req,res)=> {
    cursos.find({},(err,cursos)=>{
        return res.json(cursos);
    });
});

router.post('/curso',(req,res) => {
    cursos.create(req.body,(err, cursos) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(cursos)
    }
});
});

//areas
router.get('/area',(req,res)=> {
    areas.find({},(err,areas)=>{
        return res.json(areas);
    });
});

router.post('/area',(req,res) => {
    areas.create(req.body,(err, areas) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(areas)
    }
});
});

module.exports= router;