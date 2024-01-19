import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

	const { isDev } = options;

	const tsLoader = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
		  // Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
						localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
					}
				}
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	return [tsLoader, cssLoader]
}
