define([
    "angular",
    "lazy",
    "router"
], function(angular, lazy) {

    var conf = [
        {
            name: "test",
            url: "/test",
            controller: "testCtrl",
            templateUrl: "src/framework/view/test.html",
            scripts: {
                controllers: ["src/framework/controller/testCtrl"]
            }
        },
        {
            name: "page1",
            url: "/page1",
            controller: "page1Ctrl",
            templateUrl: "src/business/view/page1.html",
            scripts: {
                controllers: ["src/business/controller/page1Ctrl"]
            }
        }
    ];

    var module = angular.module("routerModule", ["ui.router"]);
    lazy.makeLazy(module);
    module.lazyStateConfig(conf);

    return module
});