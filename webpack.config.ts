import path from 'path';
import webpack from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths} from "./config/build/types/types";


interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    apiUrl?:string
}

export default (env: EnvVariables) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const analyzer = env.analyzer
    const isDev = mode === 'development';

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port,
        mode,
        paths,
        apiUrl,
        analyzer
    })

    return config;
}

