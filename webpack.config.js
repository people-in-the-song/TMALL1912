const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");//复制文件插件

module.exports = {
    mode: 'development',
    entry: "./src/script/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),//拼接路径
        filename: "script/bundle.js"//设置路径和文件名
    },
    module: {
        rules: [
            {
                //加载jquery
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                },
                {
                    loader: 'expose-loader',
                    options: 'jQuery'
                }
                ]
            },

            { //加载css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, 
            // { //配置图片文件的包
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: 'images/[name].[ext]'
            //     }
            // }
        ]
},
    plugins: [
        new HtmlWebpackPlugin({
            title: '天猫首页',
            filename: "index.html",
            template: "./src/index1.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '天猫详情页',
            filename: "details.html",
            template: "./src/details.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '登录注册',
            filename: "registry.html",
            template: "./src/registry.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '登录注册',
            filename: "login.html",
            template: "./src/login.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new HtmlWebpackPlugin({
            title: '购物车',
            filename: "cartlist.html",
            template: "./src/cartlist.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
        new CopyWebpackPlugin([
            {
                from: "./src/fonts",
                to  : "fonts"
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: "./src/imges",
                to  : "images"
            }
        ]),

    ]
};