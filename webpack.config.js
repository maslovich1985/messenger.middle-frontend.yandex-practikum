const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        historyApiFallback: true,
        port: 8080,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    stats: {
        errorDetails: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.hbs', '.less'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/,
            },

            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.hbs?$/,
                loader: 'handlebars-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
};
