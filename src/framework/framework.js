define([
        "router",
        "routeConfig",
        "utilFunc",
        "lang/common",
        "lang/business",
        "src/framework/controller/menuCtrl"
    ], function(router, routeConfig, utilFunc, i18n, i18nBiz, menuCtrl) {

    var deps = [
        "ng",
        "ui.router",
        routeConfig.name
    ];
    var app = angular.module("app", deps);

    // register services
    app.service("utilFunc", utilFunc);

    app.controller("frameworkCtrl", function ($scope, $rootScope) {
        $scope.template = {
            headerTpl: "src/framework/view/header.html",
            menuTpl: "src/framework/view/menu.html",
            footerTpl: "src/framework/view/footer.html"
        };

        $rootScope.i18n = $scope.i18n = _.extend(i18n, i18nBiz);

    });

    app.controller("headerCtrl", function ($scope) {

    });

    app.controller("menuCtrl", menuCtrl);

    app.controller("footerCtrl", function ($scope, $window) {
        var i18n = $scope.i18n,
            lang = getCookie("locale"),
            isDefaultLang = lang === conf.defaultLang;
        $scope.curLang = isDefaultLang ? i18n.common_term_langZh_label : i18n.common_term_langEn_label;
        $scope.switchLang = function () {
            isDefaultLang ? setCookie("locale", "en_us") : setCookie("locale", "zh_cn");
            $window.location.reload();
        }
    });

    return app
});