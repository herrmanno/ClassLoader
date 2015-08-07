declare module ho.classloader {
    interface ILoadArguments {
        url?: string;
        name?: string;
        parent: boolean;
        expose: boolean;
    }
}
