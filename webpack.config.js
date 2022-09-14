const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, './client/assets/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,    
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                        '@babel/env',
                        '@babel/react',
                        ]
                    }
                }
            },
            {
              test: /\.(ts|tsx)$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                test: /.(css|scss)$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        fallback: {"crypto": false}
    },
    devServer: {
        port: '8080',
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '/dist'),
            publicPath: '/build',
        },
        proxy: {
            '/': 'http://localhost:5137'
        }
    }
}