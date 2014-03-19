var myCar = angular.module('my-car', []);

myCar.controller('CarselectionCtrl', ['CarSelectionService', '$scope',  function(CarSelectionService, $scope){
  $scope.carMakers = CarSelectionService.getCarMakers();

  $scope.isCarModelDisable = function(){
    return $scope.carMaker !== undefined;
  }

  $scope.makerChange = function() {
    $scope.carModel = '';
    $scope.carModels = CarSelectionService.getCarModels($scope.carMaker);
  }
}]);

