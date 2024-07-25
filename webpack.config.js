const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [{
            test: /\.css$/,
            // loader: "css-loader"
            use: [
                'style-loader',
                'css-loader'
            ]
        },
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    },
    externals: {
        react: "react"
    }
};