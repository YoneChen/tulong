const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.config.js');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = merge(baseWebpackConfig, {
    mode: 'development',
	devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 9003,
        hot: true,
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: {
          rewrites: [
            {
              from: /.*/,
              to: '/index.html'
            }
          ]
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            
        }),
        new HtmlWebpackPlugin({
            title: '图刀',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ]
})