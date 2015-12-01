angular.module('AbbyIntroduction.portfolios.service', [

]).factory('portfolios', ['$http', 'utils', function ($http, utils) {
  var path = 'assets/portfolios.json';
  var portfolios = $http.get(path).then(function (resp) {
    return resp.data.portfolios;
  });

  var factory = {};
  factory.all = function () {
    return portfolios;
  };

  factory.get = function (id) {
    return portfolios.then(function(){
      return utils.findById(portfolios, id);
    })
  };
  return factory;
}]);
