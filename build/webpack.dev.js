const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const htmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname,'../dist'),
        port: 80,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../index.html'),
            inject: true,
            favicon: path.resolve(__dirname,'../star.ico')
        })
    ]
})
module.exports = devConfig