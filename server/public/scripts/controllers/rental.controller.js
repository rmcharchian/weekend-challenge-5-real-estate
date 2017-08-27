myApp.controller('RentalController', 
    function (RentalService){
        console.log('Rental controller loaded');

        var self = this;
        // self.newRental = {};
        // RentalService.getRental();
        self.rentals = RentalService.rentals;   

    });

console.log('Rental Controller is hit');