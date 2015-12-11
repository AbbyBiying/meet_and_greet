var app = angular.module('AbbyIntroduction', ['ui.router','ngAnimate',
  'AbbyIntroduction.utils.service', 'AbbyIntroduction.portfolios.service','AbbyIntroduction.portfolios'
  ])
.run(['$rootScope', '$state', '$stateParams', function ($rootScope,$state,$stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])
