declare module ho.classloader {
    interface ILoaderConfig {
        loadType: LoadType;
        urlTemplate: string;
        useDir: boolean;
        useMin: boolean;
        exists: (name: string) => boolean;
    }
    class LoaderConfig implements ILoaderConfig {
        loadType: LoadType;
        urlTemplate: string;
        useDir: boolean;
        useMin: boolean;
        exists: (name: string) => boolean;
        constructor(c?: ILoaderConfig);
    }
}
