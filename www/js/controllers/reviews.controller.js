(function () {
  angular.module('starter.controllers')
    .controller('ReviewsController', ReviewsController);

  function ReviewsController($scope, $state, $timeout, $ionicSlideBoxDelegate, $ionicModal, $ionicActionSheet, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory, ProductService) {

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

    function getSingleProduct() {
      ApiFactory
        .getProductsDataFact()
        .then(function (response) {
          $scope.productDetails = response[0];
        }, function (error) {
          console.log(error);
        })
    }

    if (ProductService.getSelectedProduct()) {
      $scope.productDetails = ProductService.getSelectedProduct();
    } else {
      getSingleProduct();
    }

    $scope.ratingsObject = {
      rating: 4,
      readOnly: true,
      callback: function (rating) {
        console.log(rating)
      }
    };

  }

})();
