module ho.classloader {

	export interface ILoaderConfig {
		loadType?: LoadType;
		urlTemplate?: string;
		useDir?: boolean;
		useMin?: boolean;
		//exists?: (name: string)=>boolean;
		cache?: boolean;
	}

	export class LoaderConfig implements ILoaderConfig {

		loadType: LoadType;
		urlTemplate: string;
		useDir: boolean;
		useMin: boolean;
		//exists: (name: string)=>boolean;
		cache: boolean;

		constructor(c: ILoaderConfig = <ILoaderConfig>{}) {
			this.loadType = c.loadType || LoadType.EVAL;
			this.urlTemplate = c.urlTemplate || "${name}.js"
			this.useDir = typeof c.useDir === 'boolean' ? c.useDir : true;
			this.useMin = typeof c.useMin === 'boolean' ? c.useMin : false;
			//this.exists = c.exists || this.exists.bind(this);
			this.cache = typeof c.cache === 'boolean' ? c.cache : true;
		}

	}

}
