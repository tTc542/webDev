define([], function () {
    // common functions
    var utilService = function () {
        /*
        * To prevent reverse injection
        * @param url {str}
        * */
        this.safeOpen = function (url) {
            var win = window.open(url);
            win.opener = null;
        };

        /*
        * Replace the specified character
        * @param s {str}
        * @param o {array}
        * @return {str}
        * */
        this.strFormat = function (s, a) {
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
            var cookieList = document.cookie.split(';');
            for (var i in cookieList) {
                if (cookieList[i].split("=")[0] === k) {
                    return cookieList[i].split("=")[1]
                }
            }
        };
    };

    return utilService
});