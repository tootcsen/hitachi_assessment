angular.module('App').factory('ContactService', function ($q, $http) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http.get('mock-data/contact-mock-data.json').then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error)
            });
            return deferred.promise;
        }
    };
});