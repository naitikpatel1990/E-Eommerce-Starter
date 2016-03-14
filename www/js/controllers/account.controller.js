angular.module('starter.controllers')
  .controller('AccountCtrl', AccountCtrl);

function AccountCtrl($scope, $state, $ionicPlatform, vars, CommonServices) {

  //$ionicPlatform.ready(function () {
  console.log(CommonServices.isMobile());
  if (CommonServices.isMobile()) {
    //$cordovaGoogleAnalytics.trackView('Account Page');
    //$cordovaGoogleAnalytics.trackEvent('AccountEvent', 'Video Load Time', 'Gone With the Wind', 100);
  }
  //});

  $scope.changeState = function (state) {
    $state.go(state);
  };

}
