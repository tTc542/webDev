define(["router"], function () {

    var lazy = angular.module("lazy", ["ui.router"]);

    lazy.makeLazy = function (module) {
        module.config(function ($compileProvider, $filterProvider, $controllerProvider, $provide) {
            module.lazyController = lazy.register($controllerProvider.register);
            module.lazyDirective = lazy.register($compileProvider.directive);
            module.lazyFilter = lazy.register($filterProvider.register);
            module.lazyService = lazy.register($provide.service);
            module.lazyFactory = lazy.register($provide.factory);
        });

        module.lazyStateConfig = function (routeConfig) {
            module.config(["$stateProvider", function ($stateProvider) {
                angular.forEach(routeConfig, function (config) {
                    var conf = lazy.parse(config);
                    $stateProvider.state(conf);
                });
            }])
        };

        return module
    };

    lazy.register = function (fn) {
        return function (name, constructor) {
            fn(name, constructor)
        }
    };

    lazy.parse = function (conf) {
        if (!conf.scripts) {
            return conf
        }
        conf.resolve = conf.resolve || {};
        conf.resolve.loadCtrl = function ($q, $rootScope) {
            function load(url) {
                var deferred = $q.defer();
                if (url === null) {
                    deferred.resolve();
                    return deferred.promise
                }
                require(url, function () {
                    $rootScope.$apply(function () {
                        deferred.resolve()
                    });
                });
                return deferred.promise
            }
            return $q.all([
                load(conf.scripts["directive"] || null),
                load(conf.scripts["controllers"] || null),
                load(conf.scripts["services"] || null),
                load(conf.scripts["factory"] || null),
                load(conf.scripts["js"] || null)
            ]);
        };

        return conf
    };

    return lazy

});