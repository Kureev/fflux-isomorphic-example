var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3001/',
        'webpack/hot/only-dev-server',
        __dirname + '/client'
    ],
    devServer: {
        contentBase: 'http://localhost:3000'
    },
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3001/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{ 
            test: /\.jsx?$/, 
            loaders: ['react-hot', 'babel-loader'], 
            exclude: /node_modules/ 
        }]
    }
};