let path = require('path');
const webpack = require('webpack');

//var Visualizer = require('webpack-visualizer-plugin');
//var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
    entry: {
        index: './src_client/index.js',
        //        inline_index: './src/client_inline/index.js',
    },
    watch:true,
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public/dist/'),
    },
    plugins: [
        //new HardSourceWebpackPlugin(),
        // new Visualizer({
        //     filename: './statistics.html',
        //  }),
    ],
    mode: 'development',
    //mode: 'production',
};
