declare module ho.classloader {
    let mapping: {
        [key: string]: string;
    };
    class ClassLoader {
        private conf;
        private cache;
        constructor(c?: ILoaderConfig);
        config(c: ILoaderConfig): void;
        load(arg: ILoadArguments): any;
        protected load_script(arg: ILoadArguments): PromiseOfClasses;
        protected load_function(arg: ILoadArguments): PromiseOfClasses;
        protected load_eval(arg: ILoadArguments): PromiseOfClasses;
        protected getParentName(url: string): ho.promise.Promise<string, any>;
        protected parseParentFromSource(src: string): string;
        resolveUrl(name: string): string;
        protected exists(name: string): boolean;
    }
}
declare module ho.classloader {
    interface ILoadArguments {
        name?: string;
        url?: string;
        parent?: boolean;
        expose?: boolean;
        super?: Array<string>;
    }
    class LoadArguments implements ILoadArguments {
        name: string;
        url: string;
        parent: boolean;
        expose: boolean;
        super: Array<string>;
        constructor(arg: ILoadArguments, resolveUrl: (name: string) => string);
    }
}
declare module ho.classloader {
    enum WarnLevel {
        INFO = 0,
        ERROR = 1,
    }
    interface ILoaderConfig {
        loadType?: LoadType;
        urlTemplate?: string;
        useDir?: boolean;
        useMin?: boolean;
        cache?: boolean;
        warnLevel?: WarnLevel;
    }
    class LoaderConfig implements ILoaderConfig {
        loadType: LoadType;
        urlTemplate: string;
        useDir: boolean;
        useMin: boolean;
        cache: boolean;
        warnLevel: WarnLevel;
        constructor(c?: ILoaderConfig);
    }
}
declare module ho.classloader {
    enum LoadType {
        SCRIPT = 0,
        FUNCTION = 1,
        EVAL = 2,
    }
}
declare module ho.classloader {
    function config(c: ILoaderConfig): void;
    function load(arg: ILoadArguments): PromiseOfClasses;
}
declare module ho.classloader {
    type clazz = Function;
    type PromiseOfClasses = ho.promise.Promise<clazz[], any>;
}
declare module ho.classloader.util {
    function expose(name: string, obj: any, error?: boolean): void;
}
declare module ho.classloader.util {
    function get(path: string, obj?: any): any;
}
declare module ho.classloader.xhr {
    function get(url: string): ho.promise.Promise<string, string>;
}
