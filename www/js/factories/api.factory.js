angular.module('starter.factories')
  .factory('ApiFactory', ApiFactory);

function ApiFactory($q, $resource) {
  var homeResource = $resource('data/home_page_data.json', null, {update: {method: 'PUT'}});
  var filterResource = $resource('data/filter_data.json', null, {update: {method: 'PUT'}});
  var productsResource = $resource('data/products_page_data.json', null, {update: {method: 'PUT'}});

  function getHomePageDataFact() {
    var defer = $q.defer();
    homeResource
      .get('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  function getAllFilterDataFact() {
    var defer = $q.defer();
    filterResource
      .query('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  function getProductsDataFact() {
    var defer = $q.defer();
    productsResource
      .query('', {}, function (response) {
        defer.resolve(response);
      }, function (error) {
        defer.reject(error);
      });
    return defer.promise;
  }

  return {
    getHomePageDataFact: getHomePageDataFact,
    getAllFilterDataFact: getAllFilterDataFact,
    getProductsDataFact: getProductsDataFact
  }

}
