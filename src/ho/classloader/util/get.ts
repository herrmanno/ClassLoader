module ho.classloader.util {

	export function get(path: string, obj:any = window): any {
		path.split('.').map(part => {
			obj = obj[part];
		})
		return obj;
	}
}
