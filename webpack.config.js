const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config({ path: "./.env" });

const deps = require("./package.json").dependencies;

module.exports = (env, argv) => {
	console.log(
		"PUBLIC_PATH:",
		process.env.PUBLIC_PATH,
		"ENVIRONMENT_MODE:",
		process.env.ENVIRONMENT_MODE,
		"REMOTE_PATH:",
		process.env.REMOTE_PATH
	);

	return {
		output: {
			path: path.resolve(__dirname, "./dist"),
			publicPath: process.env.PUBLIC_PATH,
		},

		mode: process.env.ENVIRONMENT_MODE,

		resolve: {
			extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
		},

		devServer: {
			hot: true,
			port: 3000,
			historyApiFallback: true,
			allowedHosts: "all",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers":
					"Origin, X-Requested-With, Content-Type, Accept",
			},
		},

		module: {
			rules: [
				{
					test: /\.m?js/,
					type: "javascript/auto",
					resolve: {
						fullySpecified: false,
					},
				},
				{
					test: /\.(css|s[ac]ss)$/i,
					use: ["style-loader", "css-loader", "postcss-loader"],
				},
				{
					test: /\.(ts|tsx|js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(dotenv.parsed),
			}),

			new ModuleFederationPlugin({
				name: "container",
				filename: "remoteEntry.js",
				remotes: {
					remote: process.env.REMOTE_PATH,
				},
				exposes: {
					"./Button": "./src/components/Button.tsx",
					"./hooks/useStore": "./src/hooks/useStore.ts",
					"./hooks/useStoreSelector": "./src/hooks/useStoreSelector.ts",
					"./providers/StoreProvider": "./src/providers/StoreProvider.tsx",
				},
				shared: {
					...deps,
					react: {
						singleton: true,
						requiredVersion: deps.react,
					},
					"react-dom": {
						singleton: true,
						requiredVersion: deps["react-dom"],
					},
				},
			}),
			new HtmlWebPackPlugin({
				template: "./src/index.html",
			}),
		],
	};
};
