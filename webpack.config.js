const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(\.css|\.scss|\.sass)$/,

                //todo-ank Find the exact usage of style loader.
                // Adding just the css loader didn't help.
                use: [{ loader: 'style-loader' }, {
                    loader: 'css-loader', options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader'
                }]

            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // Use index.ejs because this plugin adds the script each time 
            // with each webpack build, if passed an index.html file.
            // todo-ank Need to figure out the reason for the same.
            template: './src/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // Shows a full-screen overlay in the browser when there are compiler errors
        overlay: true,
        hot: true
    },

}