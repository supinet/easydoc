module.exports = function(app) {
    app.get('/v1/atendimentos', function(req, res) {
        var atendimentos = [
            {_id: 1, tipo_atendimento: 'PRIMARIO', retorno: 'NÃO'},
            {_id: 2, tipo_atendimento: 'PRIMARIO', retorno: 'SIM'},
            {_id: 3, tipo_atendimento: 'PRIMARIO', retorno: 'NÃO'}
        ];
        res.json(atendimentos);
    });
}