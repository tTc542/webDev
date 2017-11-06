define([], function () {

    var ctrl = function ($scope) {
        $scope.msg = "from test controller";
    };

    var module = angular.module("routerModule");
    module.lazyController("testCtrl", ctrl);
    return module
});