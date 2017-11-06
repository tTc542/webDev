define([], function () {

    var ctrl = function ($scope) {
        $scope.msg = "from page1Ctrl";
    };

    var module = angular.module("routerModule");
    module.lazyController("page1Ctrl", ctrl);
    return module
});