
require.config({
    baseUrl: "./",
    paths: {
        "jquery": "lib/jquery.min",
        "angular": "lib/angular",
        "router": "lib/angular-ui-router",

        "framework": "src/framework/framework",
        "routeConfig": "src/framework/config/routeConfig",
        "utilFunc": "src/services/utilFunc"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "router": {
            deps: ["angular"]
        }
    }
});

require(["jquery", "framework"], function ($, framework) {
    angular.bootstrap($("html"), [framework.name])
});