const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // Use index.ejs because this plugin adds the script each time 
            // with each webpack build, if passed an index.html file.
            // todo-ank Need to figure out the reason for the same.
            template: './src/index.ejs'
        })
    ],

    watch: true,
    watchOptions: {
        ignored: '/node_modules/'
    }

}