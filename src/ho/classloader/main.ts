/// <reference path="../../../bower_components/ho-promise/dist/promise.d.ts"/>

module ho.classloader {

	let loader = new ClassLoader();

	export function config(c: ILoaderConfig): void {
		loader.config(c);
	};

	export function load(arg: ILoadArguments): PromiseOfClasses {
		return loader.load(arg);
	};


}
