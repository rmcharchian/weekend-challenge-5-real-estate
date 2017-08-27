myApp.service('RentalService', ['$http', function ($http) {
    console.log('Rental Service Loaded');

    var self = this;
    self.rentals = { list: [] };

    self.getRental = function(){
        $http.get('/rentals').then(function(response){
            self.rentals.list = response.data;
            console.log('get response: ', self.rentals);
            console.log(response);
        });
    };

self.getRental();
}]);

console.log('Rental Service is hit');