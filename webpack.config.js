const path = require('path')
const vueLoaderPLugin = require('vue-loader/lib/plugin')

module.exports = {

	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'index.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js'
		},
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{ loader: 'vue-loader' },
				]
			},
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader' },
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"vue-style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new vueLoaderPLugin(),
	]
}