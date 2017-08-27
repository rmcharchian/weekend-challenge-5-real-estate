myApp.service('ListingService', ['$http', function ($http) {
    console.log('Listing Service Loaded');

    var self = this;
    self.listings = { list: [] };

    self.getListing = function(){
        $http.get('/listings').then(function(response){
            self.listings.list = response.data;
            console.log('get response: ', self.listings);
            console.log(response);
        });
    };

self.getListing();
}]);

console.log('Listing Service is hit');