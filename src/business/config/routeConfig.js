define(["lazy"], function (lazy) {

    var conf = [
        {
            "name": "page1",
            "url": "/page1",
            "templateUrl": "src/business/view/page1.html",
            "controller": "page1Ctrl",
            "scripts": {
                "controller": "src/business/controller/page1Ctrl"
            }
        }
    ];

    var module = angular.module("bizModule", ["ui.router"]);
    module = lazy.makeLazy(module);

    module.stateConfig(conf);

    return module
});