/// <reference path="../../../bower_components/ho-promise/dist/promise.d.ts" />
declare module ho.classloader {
    function config(c: ILoaderConfig): void;
    function load(): PromiseOfClasses;
}
