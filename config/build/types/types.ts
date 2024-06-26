export interface BuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
    port: number;
    apiUrl: string;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
    isDev?:boolean
}
