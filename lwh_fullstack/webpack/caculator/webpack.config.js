const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html' ,
            template: path.resolve(__dirname, './src/index.html'),
            chunks: ['index'],
            excludeChunks: ['node_modules']
        })
    ],
    devServer: {
        open: true,
        host: 'localhost',
        port: 3300
    }
}