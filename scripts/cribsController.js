(function() { 
  'use strict';

  function CribsController($scope) {

        $scope.cribs = [
          {
            "type": "Condo",
            "price": 220000,
            "address": "213 Grove Street",
            "description": "Excellent place, really nice view!"
          },
          {
            "type": "House",
            "price": 410500,
            "address": "7823 Winding Way",
            "description": "Beautiful home with lots of space for a large family."
          },
          {
            "type": "Duplex",
            "price": 395000,
            "address": "834 River Lane",
            "description": "Great neighborhood and lots of nice green space."
          }
        ];
  }

    CribsController.$inject = ['$scope']

  angular
    .module('ngCribs')
    .controller('cribsController', CribsController);

  }());