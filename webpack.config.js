const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

var webConfig = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'public'),
        filename: "[name].bundle.js",
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            }
        ]
    },
    plugins: [
        new ReactLoadablePlugin({
            filename: path.resolve(__dirname, 'dist','react-loadable.json' )
          }),
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}

const serverConfig = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: [
                            "react-loadable/babel",
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                }
            }
        ]
    },

    name: 'server',
    target: 'node',
    externals: [nodeExternals()],

    entry: {
        server: ['@babel/polyfill', path.resolve(__dirname, 'src', 'server.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },

    devtool: 'cheap-module-source-map',

    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    }
}

module.exports = [webConfig, serverConfig];