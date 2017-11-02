define([
        "router",
        "routeConfig",
        "utilFunc"
    ], function(router, routeConfig, utilFunc) {

    var deps = [
        "ng",
        "ui.router",
        routeConfig.name
    ];
    var app = angular.module("app", deps);

    // register services
    app.service("utilFunc", utilFunc);

    return app
});