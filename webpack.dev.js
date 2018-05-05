const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');


module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // Shows a full-screen overlay in the browser when there are compiler errors
        overlay: true,
        hot: true,
        // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. 
        // We can enable this by passing:
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    mode: 'development'
})