module ho.classloader {

	export let mapping: {[key:string]: string} = {}

	export class ClassLoader {

		private conf: ILoaderConfig = <ILoaderConfig>{};
		private cache: {[key:string]: Function} = {}

		constructor(c?: ILoaderConfig) {
			this.conf = new LoaderConfig(c);
		}

		config(c: ILoaderConfig): void {
			this.conf = new LoaderConfig(c);
		}

		load(arg: ILoadArguments) {
			arg = new LoadArguments(arg, this.resolveUrl.bind(this));

			switch(this.conf.loadType) {
				case LoadType.SCRIPT:
					return this.load_script(arg);
					break;
				case LoadType.FUNCTION:
					return this.load_function(arg);
					break;
				case LoadType.EVAL:
					return this.load_eval(arg);
					break;
			}
		}

		protected load_script(arg: ILoadArguments): PromiseOfClasses {
			let self = this;
			let parents = [];
			let p = new ho.promise.Promise<clazz[], any>();

			if(this.conf.cache && !!this.cache[arg.name])
				return ho.promise.Promise.create([this.cache[arg.name]]);

			if(!!arg.parent) {
				this.getParentName(arg.url)
				.then(parentName => {
					if(arg.super === parentName)
						return [];
					else
						return self.load({name: parentName, parent: true, expose: arg.expose, super: arg.super})
				})
				.then(p => {
					parents = p
					load_internal();
				})
				.then(clazz => {
					if(self.conf.cache)
						self.cache[arg.name] = clazz;
					parents = parents.concat(clazz);
					p.resolve(parents);
				})
			}
			else {
				load_internal()
				.then(clazz => {
					p.resolve(clazz);
				})
			}

			return p;


			function load_internal() {
				return new ho.promise.Promise<clazz[], any>((resolve, reject) => {
					let src = arg.url;
					let script = document.createElement('script');
					script.onload = function() {
						if(typeof util.get(name) === 'function')
							resolve([util.get(name)]);
						else
							reject(`Error while loading Class ${arg.name}`)
					}.bind(this);
					script.src = src;
					document.getElementsByTagName('head')[0].appendChild(script);
				});
			}

		}

		protected load_function(arg: ILoadArguments): PromiseOfClasses {
			let self = this;
			let parents = [];
			let source;

			return xhr.get(arg.url)
			.then(src => {
				source = src;
				if(!!arg.parent) {
					let parentName = self.parseParentFromSource(src);
					if(arg.super === parentName)
						return [];
					else
						return self.load({name: parentName, parent: true, expose: arg.expose, super: arg.super});
				}
			})
			.then(p => {
				parents = p;
				let src = source + "\nreturn " + arg.name + "\n//#sourceURL=" + arg.url;
				let clazz = new Function(src)();
				if(arg.expose)
					util.expose(arg.name, clazz);
				return clazz
			})
			.then(clazz => {
				if(self.conf.cache)
					self.cache[arg.name] = clazz;
				parents.push(clazz);
				return parents;
			})
		}

		protected load_eval(arg: ILoadArguments): PromiseOfClasses {
			let self = this;
			let parents = [];
			let source;

			return xhr.get(arg.url)
			.then(src => {
				source = src;
				if(!!arg.parent) {
					let parentName = self.parseParentFromSource(src);
					if(arg.super === parentName)
						return [];
					else
						return self.load({name: parentName, parent: true, expose: arg.expose, super: arg.super});
				}
			})
			.then(p => {
				parents = p;
				let src = source + "\n//#sourceURL=" + arg.url;
				eval(source);
				return util.get(arg.name)
			})
			.then(clazz => {
				if(self.conf.cache)
					self.cache[arg.name] = clazz;
				parents.push(clazz);
				return parents;
			})
		}

		protected getParentName(url: string): ho.promise.Promise<string, any> {
			let self = this;

			return	xhr.get(url)
				.then(src => {
					return self.parseParentFromSource(src);
				})
		}

		protected parseParentFromSource(src: string): string {
			let r_super = /}\)\((.*)\);/;
			let match = src.match(r_super);
			if(match)
				return match[1];
			else
				return undefined;
		}

		public resolveUrl(name: string): string {
			if(!!mapping[name])
                return mapping[name];

			if(this.conf.useDir) {
                name += '.' + name.split('.').pop();
            }

			name = name.split('.').join('/');

			if(this.conf.useMin)
                name += '.min'

			return this.conf.urlTemplate.replace('${name}', name);
		}

		protected exists(name: string): boolean {
			return !!this.cache[name];
		}
	}
}
