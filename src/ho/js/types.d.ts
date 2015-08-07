declare module ho.classloader {
    type clazz = Function;
    type PromiseOfClasses = ho.promise.Promise<clazz[], any>;
}
