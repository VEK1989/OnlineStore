const path = require('path')
const VueLoaderPLugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',

	entry: './src/index.js',
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
			// {
			// 	test: /\.js$/,
			// 	use: [
			// 		{ loader: 'babel-loader' },
			// 	]
			// },
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new VueLoaderPLugin(),
	]
}