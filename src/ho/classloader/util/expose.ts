module ho.classloader.util {
	export function expose(name:string, obj:any, error = false) {
		let path = name.split('.');
		name = path.pop();

		let global = window;

		path.map(part => {
			global[part] = global[part] || {};
			global = global[part];
		})

		if(!!global[name]) {
			let msg = "Global object " + path.join('.') + "." + name + " already exists";
			if(error)
				throw msg;
			else
				console.info(msg);

		}

		global[name] = obj;
	}
}
