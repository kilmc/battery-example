const BatteryWebpackPlugin = require('../battery-webpack-plugin/');
console.log({BatteryWebpackPlugin})

module.exports = {
  mode: "development",
  entry: "./input/index.js",
  output: {
    path: __dirname+'/dist',
    filename: "[name].js"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['env','react'],
              plugins: ['transform-object-rest-spread']
            }
          },{
            loader: require.resolve('../battery-webpack-plugin/dist/loader.js')
          }
        ]
      }
    ]
  },
  plugins: [new BatteryWebpackPlugin()]
}