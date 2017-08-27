var myApp = angular.module('EstateApp',['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider.when('/',
        { redirectTo: '/home' }
    ).when('/listing', {
        templateUrl: 'views/listing.html',
        controller: 'ListingController as vm'
    }).when('/rental', {
        templateUrl: 'views/rental.html',
        controller: 'RentalController as vm'
    })
}])



console.log('client.js is running');







