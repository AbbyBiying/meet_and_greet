var app = angular.module('AbbyIntroduction', ['ui.router','ngAnimate', 'ngMaterial', 'ngMessages',
  'AbbyIntroduction.utils.service', 'AbbyIntroduction.portfolios.service','AbbyIntroduction.portfolios'
  ])
.run(['$rootScope', '$state', '$stateParams', function ($rootScope,$state,$stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])

app.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('orange');
});
