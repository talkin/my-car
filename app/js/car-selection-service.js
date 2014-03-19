angular.module('my-car').factory('CarSelectionService', [function(){
  return {
    getCarMakers: function() {
      return ['Audi', 'BMW', 'Benz'];
    },
    getCarModels: function(carMaker) {
      if(carMaker === 'Audi') {
        return ['A3', 'A4', 'A6'];
      } else {
        return ['God', 'Godness'];
      }
    }
  };
}]);
