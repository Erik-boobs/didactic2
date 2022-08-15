const areasController={};

//consultar
areasController.getAreas= (req,res)=> {
    req.getConnection((err,conn)=> {
        conn.query('SELECT * FROM areaconocimiento',(err,rows) =>{
            if (err){
                res.json(err);
            }res.json(rows);
        });
    });
}

//consultar uno solo
// areasController.getAreas= (req,res)=> {
//     const { id }= req.params;
//     req.getConnection((err,conn)=> {
//         conn.query('SELECT * FROM areaconocimiento where cveArea = ?',[id],(err,rows) =>{
//             if (err){
//                 res.json(err);
//             }res.json(rows);
//         });
//     });
// }

//crear
areasController.createAreas= (req,res)=> {
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn)=> {
        conn.query('INSERT INTO areaconocimiento SET ?',[data],(err,areaconocimiento) =>{
            if (err) return res.send(err)
  
            res.send('area registrada')
        });
    });
}

//Eliminar empleado
areasController.deleteAreas=  (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn)=> {
     conn.query('DELETE FROM areaconocimiento Where cveArea = ?',[id],(err,rows) =>{
        if (err) return res.send(err)
  
        res.send('area eliminada')
     });
    });
 }
 
 //Editar empleado
areasController.editAreas=  (req,res)=>{
    const {id}= req.params;
    const data= req.body;
    req.getConnection((err,conn)=>{
     conn.query('UPDATE areaconocimiento SET ? Where cveArea = ?', [data, id],(err,rows) => {
        if (err) return res.send(err)
  
        res.send('area actualizada')
     });
    });
 }

module.exports= areasController;