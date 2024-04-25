import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import { buildBabelLoader } from './babel/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgrLoader } from './loaders/buildSvgrLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
    };

    const svgrLoader = buildSvgrLoader();

    const cssLoader = buildCssLoader(isDev);

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = buildBabelLoader(options);

    return [
        assetLoader,
        svgrLoader,
        babelLoader,
        tsLoader,
        cssLoader,
    ];
}
