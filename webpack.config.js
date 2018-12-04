const path = require('path');

module.exports = {
    entry: {
        app: ["./app/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}