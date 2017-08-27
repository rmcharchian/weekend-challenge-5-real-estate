myApp.controller('ListingController', 
function (ListingService){
    console.log('Listing controller loaded');

    var self = this;
    // self.newListing = {};
    // RentalService.getRental();
    self.listings = ListingService.listings;   

});

console.log('Listing Controller is hit');