module.exports = {
    entry: './src/indexjsx',
    module: {
        rule: [
            { test: /\.svg$/, use: 'svg-inline-loader' }
        ]
    }
}