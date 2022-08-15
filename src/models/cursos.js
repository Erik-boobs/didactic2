const {Schema,model} = require('mongoose');

const cursoSchema = new Schema({
    nomCurso: {type: String,required:true},
    descripcion: {type: String,required:true},
    temas: {type: String,required:true},
    aprobacion: {type: Boolean,required:true},
    activo: {type: Boolean,required:true},
    autor: {type: String,required:true},
},{
    timestamps: true,
    versionkey:  false
});

module.exports= model('cursos',cursoSchema);