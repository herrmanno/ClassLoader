/// <reference path="../../../bower_components/ho-promise/dist/promise.d.ts"/>
var ho;
(function (ho) {
    var classloader;
    (function (classloader) {
        var loader = new classloader.ClassLoader();
        function config(c) {
            loader.config(c);
        }
        classloader.config = config;
        ;
        function load() {
            return loader.load.apply(loader, arguments);
        }
        classloader.load = load;
        ;
    })(classloader = ho.classloader || (ho.classloader = {}));
})(ho || (ho = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NsYXNzbG9hZGVyL21haW4udHMiXSwibmFtZXMiOlsiaG8iLCJoby5jbGFzc2xvYWRlciIsImhvLmNsYXNzbG9hZGVyLmNvbmZpZyIsImhvLmNsYXNzbG9hZGVyLmxvYWQiXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUU5RSxJQUFPLEVBQUUsQ0FhUjtBQWJELFdBQU8sRUFBRTtJQUFDQSxJQUFBQSxXQUFXQSxDQWFwQkE7SUFiU0EsV0FBQUEsV0FBV0EsRUFBQ0EsQ0FBQ0E7UUFFdEJDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLHVCQUFXQSxFQUFFQSxDQUFDQTtRQUUvQkEsZ0JBQXVCQSxDQUFnQkE7WUFDdENDLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xCQSxDQUFDQTtRQUZlRCxrQkFBTUEsU0FFckJBLENBQUFBO1FBQUFBLENBQUNBO1FBRUZBO1lBQ0NFLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLE9BQVhBLE1BQU1BLEVBQVNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUZlRixnQkFBSUEsT0FFbkJBLENBQUFBO1FBQUFBLENBQUNBO0lBR0hBLENBQUNBLEVBYlNELFdBQVdBLEdBQVhBLGNBQVdBLEtBQVhBLGNBQVdBLFFBYXBCQTtBQUFEQSxDQUFDQSxFQWJNLEVBQUUsS0FBRixFQUFFLFFBYVIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYm93ZXJfY29tcG9uZW50cy9oby1wcm9taXNlL2Rpc3QvcHJvbWlzZS5kLnRzXCIvPlxuXG5tb2R1bGUgaG8uY2xhc3Nsb2FkZXIge1xuXG5cdGxldCBsb2FkZXIgPSBuZXcgQ2xhc3NMb2FkZXIoKTtcblxuXHRleHBvcnQgZnVuY3Rpb24gY29uZmlnKGM6IElMb2FkZXJDb25maWcpOiB2b2lkIHtcblx0XHRsb2FkZXIuY29uZmlnKGMpO1xuXHR9O1xuXG5cdGV4cG9ydCBmdW5jdGlvbiBsb2FkKCk6IFByb21pc2VPZkNsYXNzZXMge1xuXHRcdHJldHVybiBsb2FkZXIubG9hZCguLi5hcmd1bWVudHMpO1xuXHR9O1xuXG5cbn1cbiJdfQ==