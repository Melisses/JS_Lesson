const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
    return {
        entry: './src/index.js',
        output: {
            hashDigestLength: 10,
            filename: (argv.mode === 'development' ? 'bundle.js' : 'bundle.[chunkhash].js'),
            path: path.resolve(__dirname,'dist')
        }
    }
}