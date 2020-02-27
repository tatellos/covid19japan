const path = require('path');

module.exports = [{
  entry: './src/js/index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'static'),
  },
}, {
  entry: './src/js/embed.js',
  output: {
    filename: 'embed.min.js',
    path: path.resolve(__dirname, 'static'),
  },
}];
