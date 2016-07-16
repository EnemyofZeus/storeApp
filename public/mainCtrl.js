angular.module('storeApp').controller('mainCtrl', function($scope, mainServ){

  $scope.getWidgets = function(){
    mainServ.getWidgets()
    .then(function(res){
      $scope.widgets =
    })
  }
})
