module ho.classloader.xhr {

	export function get(url: string): ho.promise.Promise<string, string> {
		return new ho.promise.Promise((resolve, reject) => {

                let xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = () => {
                    if(xmlhttp.readyState == 4) {
                        let resp = xmlhttp.responseText;
                        if(xmlhttp.status == 200) {
                            resolve(resp);
                        }
                        else {
                            reject(xmlhttp.statusText);
                        }
                    }
                };

                xmlhttp.open('GET', url);
                xmlhttp.send();
            });
	}
}
