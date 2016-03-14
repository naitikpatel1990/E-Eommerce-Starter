angular.module('starter.controllers')
  .controller('PlayVideoController', PlayVideoController);

function PlayVideoController($ionicPopover, $scope, $state, $cordovaInAppBrowser, $cordovaSocialSharing, $cordovaLocalNotification) {

  $scope.changeState = function (toState) {
    $state.go(toState);
  };


}
