define([], function () {

    var ctrl = function ($scope, $state) {

        var i18n = $scope.i18n;

        $scope.menuList = [
            {
                name: i18n.common_term_item1_label,
                state: "test"
            },
            {
                name: i18n.common_term_item2_label,
                state: "page1"
            }
        ];

        $scope.change = function (state) {
            $state.go(state);
        }
    };

    return ctrl
});