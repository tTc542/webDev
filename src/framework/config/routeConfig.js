define([
    "angular",
    "router"
], function(angular) {

    var serviceConfig = [
        "$stateProvider",
        "$urlRouterProvider",
        "$controllerProvider",
        function ($stateProvider, $urlRouterProvider, $controllerProvider) {
            $urlRouterProvider.otherwise("/test");
            $stateProvider.state("test", {
                url: "/test",
                templateUrl: "src/framework/view/test.html",
                controller: "testCtrl",
                resolve: {
                    loadCtrl: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require(["src/framework/controller/testCtrl"], function (ctrl) {
                            $controllerProvider.register("testCtrl", ctrl);
                            deferred.resolve()
                        });
                        return deferred.promise
                    }]
                }
            });
        }
    ];
    var routerModule = angular.module("routerModule", ["ui.router"]);
    routerModule.config(serviceConfig);

    return routerModule
});