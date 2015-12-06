angular.module('AbbyIntroduction.portfolios.service',[]).factory('loadPaintings', ['$http', function ($http) {
    var paintings = $http.get('assets/paintings.json').then(function (resp) {
      return resp.data.paintings;
    });

    var factory = {};
    factory.paintings = function () {
      return paintings;
    };

    return factory;
}]);

angular.module('AbbyIntroduction.portfolios.service', []).factory('portfolios', ['$http', 'loadPaintings','utils', function ($http, loadPaintings,utils) {
  var path = 'assets/portfolios.json';
  var portfolios = $http.get(path).then(function (resp) {
    // resp.data.portfolios[1].items[0].artworks = loadPaintings.paintings;
    debugger
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
