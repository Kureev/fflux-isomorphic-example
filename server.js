/*
 * Enable .jsx import + ES6 syntax
 * for common.js (e.g. server rendering)
 */
require('babel/register');

/* Run webpack-dev-server */
require('./webpack.server');

var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var fetchData = require('./app/fetchData');
var wishlist = require('./app/app');

var express = require('express');

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
app.use(function(req, res) {
    Router.run(routes, req.url, function(Handler, state) {
        fetchData(state.path).then(function(data) {
            if (data) {
                wishlist.stores().rehydrate(data);
            }

            const content = React.renderToString(
                React.createElement(Handler, {
                    app: wishlist
                })
            );

            res.render('layout', {
                content: content,
                data: JSON.stringify(data || [])
            });
        });
    });
});

/* Run express server on port 3000 */
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});