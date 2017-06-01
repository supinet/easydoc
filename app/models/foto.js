var mongoose = require('mongoose');

var schema = mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    retorno: {
        type: String,
        required: true
    }
});
mongoose.model('Atendimento', schema);