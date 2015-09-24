app.controller('RouteParamsController', ['$scope','$routeParams', 'CalcUrlService', 'basedOnUrlService', function($scope, $routeParams, CalcUrlService, basedOnUrlService) {

  $scope.operator = $routeParams.operator;
  $scope.param1 = $routeParams.param1;
  $scope.param2 = $routeParams.param2;

  $scope.show = basedOnUrlService.getThings($scope.param1, $scope.param2, $scope.operator, $routeParams);
  $scope.solution = CalcUrlService.getAns(+$scope.param1, +$scope.param2, $scope.operator);

}]);

app.controller('RouteParamsController2', ['$scope','$routeParams', 'CalcUrlService', 'basedOnUrlService', function($scope, $routeParams, CalcUrlService, basedOnUrlService) {
  
  $scope.operator = $routeParams.operator;
  $scope.param1 = $routeParams.x;
  $scope.param2 = $routeParams.y;

  $scope.show = basedOnUrlService.getThings($scope.param1, $scope.param2, $scope.operator, $routeParams);
  $scope.solution = CalcUrlService.getAns(+$scope.param1, +$scope.param2, $scope.operator, $routeParams);

}]);
