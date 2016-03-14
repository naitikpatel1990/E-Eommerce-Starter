angular.module('starter.controllers')
  .controller('OrdersCtrl', OrdersCtrl);

function OrdersCtrl($scope, $state) {

  $scope.selectedTab = 1;

  $scope.tabSelected = function (val) {
    $scope.selectedTab = val;
  };

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
