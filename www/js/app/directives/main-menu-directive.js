angular.module('App').directive('mainMenu', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'partials/main-menu.html'
    };
});