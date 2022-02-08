const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target:'node',
    mode:'production',
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve:{
        extensions:['.ts', '.js'] // ts 파일을 가져오기 위해 resolve 프로퍼티에 .ts 확장자를 추가
    },
    
    devServer:{
        static:'./',
        compress: true,
        port: 8080,
    }
}