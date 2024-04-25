import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/types';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        public: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.module!.rules.push(buildCssLoader(true));

    return config;
}

