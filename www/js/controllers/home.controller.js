(function () {
  angular.module('starter.controllers')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope, $state, $timeout, $ionicSlideBoxDelegate, $ionicScrollDelegate, ScrollService, ApiFactory, vars) {

    //$cordovaGoogleAnalytics.debugMode();
    //window.analytics.trackView('Home Page');

    //$cordovaGoogleAnalytics.startTrackerWithId(vars.googleAnalyticsId);

    $scope.$on('$ionicView.beforeEnter', function () {
      $ionicSlideBoxDelegate.$getByHandle('home_slidebox_dh').update();
    });

    var homeSliderDelegate;

    setTimeout(function () {
      homeSliderDelegate = $ionicSlideBoxDelegate.$getByHandle("home_slidebox_dh");
      homeSliderDelegate.update();
    }, 100);

    $timeout(function () {
      return false;
      var sv1 = $ionicScrollDelegate.$getByHandle('horizontal1').getScrollView();
      ScrollService.handleScroll(sv1);
      var sv2 = $ionicScrollDelegate.$getByHandle('horizontal2').getScrollView();
      ScrollService.handleScroll(sv2);
      var sv3 = $ionicScrollDelegate.$getByHandle('horizontal3').getScrollView();
      ScrollService.handleScroll(sv3);
      var sv4 = $ionicScrollDelegate.$getByHandle('horizontal4').getScrollView();
      ScrollService.handleScroll(sv4);
      var sv5 = $ionicScrollDelegate.$getByHandle('horizontal5').getScrollView();
      ScrollService.handleScroll(sv5);
    });


    function getHomePageProducts() {
      ApiFactory
        .getHomePageDataFact()
        .then(function (response) {
          $scope.wholeData = response;
        }, function (error) {
          console.log(error);
        })
    }

    getHomePageProducts();

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

  }

})();
