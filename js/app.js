var app = angular.module('calcApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',    
      controller: 'RouteParamsController2'
    })
    .when('/:operator/:param1/:param2', {
      templateUrl: 'partials/home.html',    
      controller: 'RouteParamsController'
    })
    .when('/:operator', {
      templateUrl: 'partials/home.html',    
      controller: 'RouteParamsController2'
    })
    .otherwise('/');

  //$locationProvider.html5Mode(true);
});