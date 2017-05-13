const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./src/entry.js",  //入口文件路径
    output: {
        path: '/dist/',  //输出文件目录
        filename: "bundle.js", //输出文件名
        publicPath: '/dist/'  //访问路径
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack构建React应用系列',
            filename: './index.html', //生成的文件
            template: path.resolve(__dirname, "src/index.html"),  //模板文件目录
            inject: 'body' //所有JavaScript资源插入到body元素的底部
        }),
        new ExtractTextPlugin("style.css"), //将css提取到style.css里面
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer({browsers:['last 2 versions']})]
            }
        })
    ],
}