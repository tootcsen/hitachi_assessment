angular.module('App').controller('ContactController', ['$scope', 'ContactService', '$routeParams', function ($scope, contactService, $routeParams) {

    contactService.get().then(function (data) {
        $scope.contactData = data;
        $scope.datas = data;

		var running_id = $routeParams.running_id;
		
        if ( typeof $routeParams.running_id != undefined ) {

			$.each(data, function(key, value) {

				if (running_id == value.id) {

					$scope.running_data = value;
				}
			})
		}
		
    }, function (error) {
        console.log(error);
    });


}]);
