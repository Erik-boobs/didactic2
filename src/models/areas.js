const {Schema,model} = require('mongoose');

const areaSchema = new Schema({
    nombreArea: {type: String,required:true},
    isActive: {type: Boolean,required:true},
},{
    timestamps: true,
    versionkey:  false
});

module.exports= model('area',areaSchema);