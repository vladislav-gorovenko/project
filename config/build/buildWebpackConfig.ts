import type {Configuration as WebpackConfiguration} from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): WebpackConfiguration {
	const { paths, mode } = options;
	return  {
		mode,
		entry: paths.entry,
		devtool: options.isDev ? 'inline-source-map' : undefined,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options) ,
		output: {
			filename: '[name].[contenthash:8].js',
			path: paths.build,
			clean: true,
			publicPath: '/'
		},
		plugins: buildPlugins(options),
		devServer: options.isDev ? buildDevServer(options) : undefined,
	}
}
