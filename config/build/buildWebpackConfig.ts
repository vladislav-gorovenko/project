import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

type WebpackMode = 'development' | 'production';

export interface BuildWebpackConfigOptions {
	mode: WebpackMode;
	paths: {
		entry: string;
		build: string;
		html: string;
	};
	isDev: boolean;
}

export function buildWebpackConfig(options: BuildWebpackConfigOptions): webpack.Configuration {
	const { paths, mode } = options;
	return  {
		mode: mode,
		entry: paths.entry,
		devtool: 'inline-source-map',
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers() ,
		output: {
			filename: '[name].[contenthash:8].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
	}
}
