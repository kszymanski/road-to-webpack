const path = require('path');

const config = {
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
            }
        ]
    }
};

module.exports = config;