/**
 * Created by issac on 2017/7/18.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: "/dist/",
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }

                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })

            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:['file-loader?name=images/[name].[ext]']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]

};

module.exports = config;