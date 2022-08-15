const cursosController={};

//consultar
cursosController.getCursos= (req,res)=> {
    req.getConnection((err,conn)=> {
        conn.query('SELECT * FROM cursos',(err,rows) =>{
            if (err){
                res.json(err);
            }res.json(rows);
        });
    });
}

//consultar uno solo
// cursosController.getCursos= (req,res)=> {
//     const { id }= req.params;
//     req.getConnection((err,conn)=> {
//         conn.query('SELECT * FROM cursos where cveCurso = ?',[id],(err,rows) =>{
//             if (err){
//                 res.json(err);
//             }res.json(rows);
//         });
//     });
// }

//crear
cursosController.createCursos= (req,res)=> {
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn)=> {
        conn.query('INSERT INTO cursos SET ?',[data],(err,cursos) =>{
            if (err) return res.send(err)
  
            res.send('curso registrado')
        });
    });
}

//Eliminar
cursosController.deleteCursos= (req,res)=> {
    const { id }= req.params;
    req.getConnection((err,conn)=> {
        conn.query('DELETE FROM cursos WHERE cveCurso = ?',[id],(err,rows) =>{
            if (err) return res.send(err)
  
            res.send('curso eliminado')
        });
    });
}




//editar
cursosController.editCursos= (req,res)=> {
    const { id }= req.params;
    const data= req.body;
    req.getConnection((err,conn)=> {
        conn.query('UPDATE cursos SET ? Where cveCurso = ?',[data, id],(err,rows) =>{
            if (err) return res.send(err)
  
            res.send('curso actualizado')
        });
    });
}

module.exports= cursosController;