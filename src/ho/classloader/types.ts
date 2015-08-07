module ho.classloader {

	export type clazz = Function;
	export type PromiseOfClasses = ho.promise.Promise<clazz[], any>;

}
