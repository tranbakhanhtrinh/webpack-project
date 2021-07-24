const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = process.env.NODE_ENV === "production" ? "production" : "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
    mode: mode,
    target: target,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024 // 30kb
                //     }
                // }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}