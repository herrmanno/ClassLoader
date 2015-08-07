declare module ho.classloader {
    enum LoadType {
        SCRIPT = 0,
        FUNCTION = 1,
        EVAL = 2,
    }
    let mapping: {
        [key: string]: string;
    };
    class ClassLoader {
        private conf;
        private cache;
        constructor(c?: ILoaderConfig);
        load(arg: ILoadArguments): promise.Promise<Function[], any>;
        protected load_script(arg: ILoadArguments): PromiseOfClasses;
        protected load_function(arg: ILoadArguments): PromiseOfClasses;
        protected load_eval(arg: ILoadArguments): PromiseOfClasses;
        protected getParentName(url: string): ho.promise.Promise<string, any>;
        protected parseParentFromSource(src: string): string;
        protected resolveUrl(name: string): string;
        protected exists(name: string): boolean;
    }
}
