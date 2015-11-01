var app = angular.module("myApp", []);

app.controller("formController", ["$scope", function ($scope) {
  $scope.user = {};
  $scope.master = {};

  this.submit = function () {
    angular.copy($scope.user, $scope.master);
  };

  this.reset = function () {
    $scope.user = {};
  };
}]);
