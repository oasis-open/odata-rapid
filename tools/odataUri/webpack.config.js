const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            util: false,
            assert: false,
            fs: false,
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: "odataUri",
            type: "umd"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser"
        })
    ],
    mode: "development"
}
