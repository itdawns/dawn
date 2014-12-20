/**
 * Module dependencies.
 */

var express = require('express');
var logger = require('morgan');
var app = express();

var app_public = process.env.APP_PUBLIC;
var env = process.env.NODE_ENV;

// log requests
app.use(logger(env));

app.use('/scripts', express.static(app_public + '/scripts'));
app.get('/*', function(req, res){
    res.sendfile('index.html', {root: app_public});
});

app.listen(8080);

console.log('['+ env +'] Starting Dawn Static Server on port 8080');
console.log('[' + env + '] listening on port 8080');
console.log('[' + env + '] route / -> ' + app_public);
