module.exports = function(uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function() {
        console.log('database connected');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexao', + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Database mongoDB server disconnected');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Closed connection');
            process.exit(0);
        });
    });
}