(function () {
  angular.module('starter.controllers')
    .controller('ProductsController', ProductsController);

  function ProductsController($scope, $state, $timeout, $ionicModal, $ionicActionSheet, $ionicPopup, $ionicScrollDelegate, ScrollService, ApiFactory, ProductService, loader) {

    $scope.sortType;
    $scope.sortReverse;
    $scope.wishlistItems = [];
    $scope.cartItems = [];
    $scope.filterModal = {};

    $scope.ratingsObject = {
      rating: 4,
      readOnly: true,
      callback: function (rating) {
        console.log(rating)
      }
    };

    function showLoaders() {
      loader.show();
      setTimeout(function () {
        loader.hide();
      }, 1000);
    }

    $scope.filterOptionSelected = function (option, index) {
      $scope.selectedFilter = option.label;
      $scope.selectedFilterValues = $scope.allFilterOptions[index].values;
    };

    function getAllFilterData(val) {
      ApiFactory
        .getAllFilterDataFact()
        .then(function (response) {
          console.log(response);
          $scope.allFilterOptions = response;
          $scope.selectedFilterValues = $scope.allFilterOptions[0].values;
        }, function (error) {
          console.log(error);
        })
    }

    getAllFilterData();

    function getAllProducts(val) {
      showLoaders();
      ApiFactory
        .getProductsDataFact()
        .then(function (response) {
          if (val === 'more') {
            $scope.allProducts.concat(response);
          } else {
            $scope.allProducts = response;
          }
          ProductService.setAllProducts(response);
        }, function (error) {
          console.log(error);
        })
    }

    getAllProducts();

    function getAllHomePageProducts() {
      showLoaders();
      ApiFactory
        .getHomePageDataFact()
        .then(function (response) {
          $scope.allHomeProducts = response.sliderImages;
        }, function (error) {
          console.log(error);
        })
    }

    getAllHomePageProducts();

    $scope.refreshTheProducts = function () {
      $scope.allProducts = [];
      getAllProducts();
      $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.loadMoreProducts = function () {
      $scope.allProducts = [];
      console.log('more');
      getAllProducts('more');
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.changeState = function (toState) {
      $state.go(toState);
    };

    $scope.goToProductDetailsPage = function (obj) {
      ProductService.setSelectedProduct(obj);
      $state.go('app.tabs.product-details');
    };

    $scope.addToWishList = function (obj, index) {
      if ($scope.wishlistItems.indexOf(obj.id) > -1) {
        angular.forEach($scope.wishlistItems, function (val, key) {
          if (val == obj.id) {
            $scope.wishlistItems.splice(key, 1);
          }
        });
      } else {
        $scope.wishlistItems.push(obj.id);
      }
    };

    $scope.addToWishCart = function (obj, index) {
      if ($scope.cartItems.indexOf(obj.id) > -1) {
        angular.forEach($scope.cartItems, function (val, key) {
          if (val == obj.id) {
            $scope.cartItems.splice(key, 1);
          }
        });
      } else {
        $scope.cartItems.push(obj.id);
      }
    };

    $scope.showSortOptions = function () {
      var actionSheetButtons = [
        {text: 'Popularity', sort_text: "popular"},
        {text: 'Newest First', sort_text: "latest"},
        {text: 'Price - Low to High', sort_text: "price"},
        {text: 'Price - High to Low', sort_text: "price"}
      ];

      $ionicActionSheet.show({
        buttons: actionSheetButtons,
        titleText: 'Sort By',
        cancelText: 'Close',
        cancel: function () {
          console.log('Cancel code');
        },
        buttonClicked: function (index) {
          $scope.sortReverse = (index == 3 || index == 1 || index == 0);
          $scope.sortType = actionSheetButtons[index].sort_text;
          return true;
        }
      });
    };

    $ionicModal.fromTemplateUrl('templates/filter-options-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.filterModal = modal;
    });

    $scope.openFilterModal = function () {
      $scope.filterModal.show();
    };

    $scope.clearFilterSelections = function () {
      $scope.filterModal = {};
    };

    $scope.closeFilterModal = function () {
      $scope.filterModal.hide();
    };

  }

})();
