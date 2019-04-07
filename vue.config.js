const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyPlugin([
                { from: './src/renderer.js', to: './dist_electron/render.js' }
            ])
        ]
    }
}