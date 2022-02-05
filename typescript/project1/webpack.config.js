/*eslint no-undef: "off"*/

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target:'node',
    mode:'development',
    devServer:{
        static:'./',
        compress: true,
        port: 8080,
    }
}