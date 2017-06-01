var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Atendimento');

api.lista = function(req, res) {
    model
        .find({})
        .then(function(atendimentos) {
            res.json(atendimentos);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.buscaPorId = function(req, res) {
    model
        .findById(req.params.id)
        .then(function(atendimento) {
            if(!atendimento) throw Error('Atendimento não encontrado');
            res.json(atendimento);
        }, function(error) {
            res.status(404).json(error);
        })
};

api.removePorId = function(req, res) {
    model
        .remove({_id: req.params.id})
        .then(function() {
            res.sendStatus(204);
        }, function(error) {
            res.status(500).json(error);
        });
};

api.adiciona = function(req, res) {

    model
        .create(req.body)
        .then(function(atendimento){
            res.json(atendimento);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
};

api.atualiza = function(req, res) {
    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(atendimento) {
            res.json(atendimento);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
};

module.exports = api;