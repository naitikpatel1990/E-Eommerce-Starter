angular.module('starter.controllers')
  .controller('SignupCtrl', SignupCtrl);

function SignupCtrl($scope, $state) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
