var api = {};

var atendimentos = [
    {_id: 1, tipo_atendimento: 'PRIMARIO', retorno: 'NÃO'},
    {_id: 2, tipo_atendimento: 'PRIMARIO', retorno: 'SIM'},
    {_id: 3, tipo_atendimento: 'PRIMARIO', retorno: 'NÃO'}
];
 
api.lista = function(req, res) {
    res.json(atendimentos);
};

api.buscaPorId = function(req, res) {
    var atendimento = atendimentos.find(function(atendimento) {
        return atendimento._id == req.params.id;
    });
    res.json(atendimento);
}
module.exports = api;