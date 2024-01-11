import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { BuildWebpackConfigOptions } from "./buildWebpackConfig";

export function buildPlugins(options: BuildWebpackConfigOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(options.paths.html),
			filename: '[name].[contenthash:8].html',
		}),
	]
}
