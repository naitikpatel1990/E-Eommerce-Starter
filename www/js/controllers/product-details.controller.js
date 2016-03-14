(function () {
  angular.module('starter.controllers')
    .controller('ProductDetailsController', ProductDetailsController);

  function ProductDetailsController($scope, $state, $timeout, $ionicSlideBoxDelegate, $ionicModal, $ionicActionSheet, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory, ProductService, $cordovaSocialSharing) {

    $scope.ratingsObject = {
      rating: 4,
      readOnly: true,
      callback: function (rating) {
        console.log(rating)
      }
    };

    $scope.$on('$ionicView.beforeEnter', function () {
      $ionicSlideBoxDelegate.$getByHandle('productSliderDelegateHandle').update();
    });

    setTimeout(function () {
      $ionicSlideBoxDelegate.$getByHandle("productSliderDelegateHandle").update();
    }, 100);

    $ionicModal.fromTemplateUrl('templates/image-detail-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.imageDetailsModal = modal;
    });

    function getRandomProducts(products) {
      var resultingProducts = [];
      for (var i = 0; i <= 3; i++) {
        resultingProducts.push(products[parseInt(Math.random() * 10)]);
      }
      return resultingProducts;
    }

    if (ProductService.getAllProducts()) {
      $scope.allProducts = ProductService.getAllProducts();
      $scope.alsoPurchasedProducts = getRandomProducts($scope.allProducts);
    }

    var imageModalDelegate = $ionicSlideBoxDelegate.$getByHandle('imageModalDelegateHandle');

    $scope.openImageDetailsModal = function () {
      $scope.imageDetailsModal.show();
    };

    $scope.closeImageDetailsModal = function () {
      $scope.imageDetailsModal.hide();
    };


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


    $scope.shareTheProduct = function (socialType, obj) {
      var link = '';

      switch (socialType) {
        case 'facebook':
          $cordovaSocialSharing
            .shareViaFacebook(obj.name, obj.images[0].src, link)
            .then(function (result) {
              console.log('Successfully shared via facebook');
            }, function (err) {
              console.log('Error while sharing via facebook');
            });
          break;

        case 'twitter':
          $cordovaSocialSharing
            .shareViaTwitter(obj.name, obj.images[0].src, link)
            .then(function (result) {
              console.log('Successfully shared via twitter');
            }, function (err) {
              console.log('Error while sharing via twitter');
            });
          break;

        case 'whatsapp':
          $cordovaSocialSharing
            .shareViaWhatsApp(obj.name, obj.images[0].src, link)
            .then(function (result) {
              console.log('Successfully shared via whatsapp');
            }, function (err) {
              console.log('Error while sharing via whatsapp');
            });
          break;

        case 'chatbubble':
          $cordovaSocialSharing
            .shareViaSMS(obj.name, '9030012345')
            .then(function (result) {
              console.log('Successfully shared via message');
            }, function (err) {
              console.log('Error while sharing via message');
            });
          break;

        default:
          console.log('Not sharing on any social network.');
      }

    };


  }

})();
