angular.module('storeApp').service('mainServ', function($http){
  this.getWidgets = function(){
    return $http {
      method:'GET',
      url: '/'
    }.then(function(res){
      return res
    })
  }
})
