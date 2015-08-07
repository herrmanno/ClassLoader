module ho.classloader.util {
	export function expose(name:string, obj:any) {
		let path = name.split('.');
		name = path.pop();

		let global = window;

		path.map(part => {
			global[part] = global[part] || {};
		})

		if(!!global[name])
			throw "Global object " + path.join('.') + "." + name + " already exists";

		global[name] = obj;
	}
}
