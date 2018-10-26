var voiture = angular.module('voiture', []);
voiture.controller('voitures', function($scope, $http) {
  $http.get("voiture.json")
  .then(function(response) {
     $scope.voitures = response.data;
      });
     });
