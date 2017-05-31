var api = {};

var idPk = 3;
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
};

api.removePorId = function(req, res) {
    atendimento = atendimentos.filter(function(atendimento){
        return atendimento._id != req.params.id
    });
    res.sendStatus(204);
};

api.adiciona = function(req, res) {
    var atendimento = req.body;
    atendimento._id = ++idPk;
    atendimentos.push(atendimento);
    res.json(atendimento);
};

api.atualiza = function(req, res) {
    atendimento = req.body;
    var atendimentoId = req.params.id;
    var indice = atendimentos.findIndex(function(atendimento){
        return atendimento._id == atendimentoId;
    });

    atendimentos[indice] = atendimento;

    res.sendStatus(200);
};

module.exports = api;