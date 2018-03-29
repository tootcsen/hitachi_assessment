angular.module('App').config(function ($routeProvider) {
$routeProvider
   
    .when('/challenges', {
        templateUrl: 'partials/pages/challenges.html',
		controller: 'ContactController'
    })
    .when('/challenges/:running_id', {
        templateUrl: 'partials/pages/challenges/running.html',
		controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/',
        templateUrl: 'partials/pages/coming_soon.html',
		controller: 'ContactController'
    });
});
