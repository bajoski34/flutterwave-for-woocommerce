const path = require("path");

const WooCommerceDependencyExtractionWebpackPlugin = require("@woocommerce/dependency-extraction-webpack-plugin");

module.exports = {
	entry: {
		overview: "./src/index.js",
		settings: "./src/pages/index.js",
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			// {
			//   test: /\.css$/,
			//   use: ['style-loader', 'css-loader']
			// }
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new WooCommerceDependencyExtractionWebpackPlugin({
			bundledPackages: ["@woocommerce/components"],
		}),
	],
};
