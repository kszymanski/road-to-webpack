const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



const config = (env, options) => {
    const devMode = options.mode !== 'production';
    return {
        resolve: {
            extensions: ['.js', '.jsx']
        },
        entry: {
            app: path.resolve(__dirname, 'src', 'index.js')
        },
        output: {
            filename: devMode ? '[name].bundle.js' : '[name].[hash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                  }),
                new OptimizeCSSAssetsPlugin({})
              ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
        ],
        mode: 'development',
        devtool: devMode ? 'cheap-eval-source-map' : 'cheap-source-map',
        devServer: {
            port: 3000,
            historyApiFallback: true,
            overlay: true
        }
    }
};

module.exports = config;