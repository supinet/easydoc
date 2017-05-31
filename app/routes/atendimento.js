module.exports = function(app) {
    var api = app.api.atendimento;

    app.route('/v1/atendimentos')
        .get(api.lista)
        .post(api.adiciona);
    
    app.route('/v1/atendimentos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);
}