angular.module('starter.controllers', [])
  .controller('IntroController', IntroController);

function IntroController($scope, $state) {

  $scope.changeState = function (state) {
    $state.go(state);
  };

  $scope.slides = [
    {img: '', color: '', bgColor: ''},
    {img: '', color: '', bgColor: ''},
    {img: '', color: '', bgColor: ''},
    {img: '', color: '', bgColor: ''}
  ];

  $scope.addClass = function () {

  };

}
