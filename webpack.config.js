const path = require('path')

module.exports = {

	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'index.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader' },
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	}
}