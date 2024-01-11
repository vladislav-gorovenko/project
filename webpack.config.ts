import webpack from 'webpack';
import 'webpack-dev-server';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({mode, paths, isDev})
export default config;
