const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
   // entry point of the application as ui/src/index.js.
    entry: path.resolve(__dirname, 'src/index.js'),
    // Set the output filename for the built application to be app.js.
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/style.css'),
                    to: 'css/style.css',
                },
            ],
        }),
    ],
};
