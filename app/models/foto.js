var mongoose = require('mongoose');

var schema = mongoose.Schema({
    tipo_atendimento: {
        type: String,
        required: true
    },
    retorno: {
        type: String,
        required: true
    }
});
mongoose.model('Atendimento', schema);