/**
 * Webpack config for development
 */
module.exports = require('./webpack.make')({
    BUILD: false,
    eslint: {
        configFile: './.eslintrc',
    },
})
