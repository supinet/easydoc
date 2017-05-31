var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/easydoc');

http.createServer(app).listen(3000, function() {
    console.log('express listen 3000 port');
});