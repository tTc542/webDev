define([
        "router",
        "routeConfig",
        "utilFunc",
        "bizRouteConfig"
    ], function(router, routeConfig, utilFunc, bizRouteConfig) {

    var deps = [
        "ng",
        "ui.router",
        routeConfig.name,
        bizRouteConfig.name
    ];
    var app = angular.module("app", deps);

    // register services
    app.service("utilFunc", utilFunc);

    return app
});