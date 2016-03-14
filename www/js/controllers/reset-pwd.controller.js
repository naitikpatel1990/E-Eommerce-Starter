angular.module('starter.controllers')
  .controller('ResetPwdCtrl', ResetPwdCtrl);

function ResetPwdCtrl($scope, $state) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
