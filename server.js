/*
 * Enable .jsx import + ES6 syntax
 * for common.js (e.g. server rendering)
 */
require('babel/register');

/* Run webpack-dev-server */
require('./webpack.server');

var express = require('express');
var React = require('react');

var Layout = require('./app/components/layout.jsx');

var app = express();

/* Configure static path for express */
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/views');

/* We're going to use ejs as template engine */
app.set('view engine', 'ejs');

/*
 * Handle default urls
 * Route `/index.html` is needed to let
 * webpack-dev-server work with our application
 */
app.get(['/', '/index.html'], function (req, res) {
    var element = React.createElement(Layout);
    var content = React.renderToString(element);
    
    res.render('layout', {
        content: content
    });
});

/* Run express server on port 3000 */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});