const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        //Using this to minify the javascript
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})
