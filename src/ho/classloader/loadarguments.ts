module ho.classloader {

	export interface ILoadArguments {
		name?: string;
		url?: string;
		parent?: boolean;
		expose?: boolean;
		super?: string;
	}

	export class LoadArguments implements ILoadArguments {

		name: string;
		url: string;
		parent: boolean;
		expose: boolean;
		super: string;

		constructor(arg: ILoadArguments, resolveUrl: (name:string)=>string) {
			this.name = arg.name;
			this.url = arg.url || resolveUrl(arg.name);
			this.parent = arg.parent || true;
			this.expose = arg.expose || true;
		}

	}

}
