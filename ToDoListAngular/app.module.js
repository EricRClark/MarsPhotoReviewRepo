angular
  .module('mars',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/new-pic', {
        templateUrl: "templates/new-pic.html",
        controller: "MarsPicController"
      })
})
