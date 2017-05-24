var api = require('../api/atendimento');
module.exports = function(app) {
    app.get('/v1/atendimentos', api.lista);
}