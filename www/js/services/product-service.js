angular.module('starter.services')
  .service('ProductService', ProductService);

function ProductService() {

  this.selectedProduct;
  this.allProducts;

  this.setAllProducts = function (response) {
    this.allProducts = response;
  };
  this.getAllProducts = function () {
    return this.allProducts;
  };

  this.setSelectedProduct = function (obj) {
    this.selectedProduct = obj;
  };
  this.getSelectedProduct = function () {
    return this.selectedProduct;
  };

}
