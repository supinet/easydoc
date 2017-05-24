module.exports = function(app) {
    var api = app.api.atendimento;
    app.get('/v1/atendimentos', api.lista);
    app.get('/v1/atendimentos/:id', api.buscaPorId);
}