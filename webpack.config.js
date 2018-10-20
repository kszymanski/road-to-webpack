const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        port: 3000,
        overlay: true
    }
};

module.exports = config;