/*eslint no-undef: "off"*/

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target:'node',
    mode:'production',
    module:{
        rules: [ // 모듈 규칙(로더 구성, 파서 옵션 등)
            {
                test:/\.ts$/, // 확장명이 .ts인 파일에 적용
                exclude: /node_modules/, // node_modules 내 ts 파일을 무시한다.
                use: 'ts-loader' // 기존 tsconfig.json의 옵션을 사용해 ts를 컴파일
            },
        ],
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