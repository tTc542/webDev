define([], function () {

    var ctrl = ["$timeout", function ($timeout, $scope) {
        $scope.msg = "from page 1";
    }];

    var module = angular.module("bizModule");
    module.controller("page1Ctrl", ctrl);
    return module
});