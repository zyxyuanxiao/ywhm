const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname,'../src/main.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname,'../src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader?name=img/[name].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: ['file-loader?name=font/[name].[ext]']
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin()
    ]
}