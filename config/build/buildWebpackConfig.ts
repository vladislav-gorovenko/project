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
		devtool: options.isDev ? 'inline-source-map' : false,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers() ,
		output: {
			filename: '[name].[contenthash:8].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		devServer: options.isDev ? buildDevServer(options) : undefined,
	}
}
