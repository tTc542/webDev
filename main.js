function queryArg(k) {
    function trimArgs(s) {
        s = s.substring(s);
        return (s.lastIndexOf("\\") === s.length - 1) ? s.substring(0, s.length - 1) : s;
    }

    var locationArgs = trimArgs(location.search);
    var argsArr = locationArgs.split("&");
    argsArr.forEach(function (v) {
        var pair = v.split("=");
        if (k === pair[0]) return pair[1]
    });
}

function getCookie(k) {
    var match = document.cookie.match(new RegExp(k + "=([^;]+)"));
    if (match) return match[1]
}

function setCookie(k, v) {
    document.cookie = k + "=" + v + ";path=/"
}


var lang = getCookie("locale") || queryArg("locale") || conf.defaultLang;
setCookie("locale", lang);

require.config({
    baseUrl: "./",
    paths: {
        "jquery": "lib/jquery.min",
        "_":"lib/underscore.min",
        "angular": "lib/angular",
        "router": "lib/angular-ui-router",

        "framework": "src/framework/framework",
        "lazy": "src/common/lazyLoad",
        "routeConfig": "src/common/routeConfig",
        "utilFunc": "src/services/utilFunc",
        "lang": "i18n/" + lang
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

require(["jquery", "framework", "_"], function ($, framework) {
    angular.bootstrap($("html"), [framework.name]);
});