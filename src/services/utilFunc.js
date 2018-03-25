define([], function () {
    // common functions
    var utilService = function () {
        /*
        * To prevent reverse injection
        * @param url {str}
        * */
        this.safeOpen = function (url, extra) {
            var win = window.open(url, extra);
            win.opener = null;
        };

        /*
        * Replace the specified character
        * @param s {str}
        * @param o {array}
        * @return {str}
        * */
        this.strFormat = function (s, o) {
            var rex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/;
            return s.repalce ? s.replace(rex, function (m, k) {
                return !angular.isUndefined(o[k]) ? o[k] : m
            }) : s;
        };

        /*
        * Get cookie with key
        * @param k {str}
        * @return {str}
        * */
        this.getCookie = function (k) {
            var match = document.cookie.match(new RegExp(k + "=([^;]+)"));
            if (match) return match[1]
        };

    };

    return utilService
});