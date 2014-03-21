var myCar = angular.module('my-car', []);

myCar.controller('CarselectionCtrl', ['CarSelectionService', '$scope',  function(CarSelectionService, $scope){
  CarSelectionService.getCarMakers().then(function(res){
    $scope.carMakers = res.data;
  })

  $scope.isCarModelDisable = function(){
    return $scope.carMaker === "" || $scope.carMaker === undefined;
  }

  $scope.makerChange = function() {
    $scope.carModel = '';
    $scope.carModels = CarSelectionService.getCarModels($scope.carMaker);
  }
}]);

