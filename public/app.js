angular.module('storeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"./templates/home.html"
  })

  $urlRouterProvider.otherwise('/');
})
