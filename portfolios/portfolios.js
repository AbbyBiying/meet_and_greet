angular.module('AbbyIntroduction.portfolios', ['ui.router'])
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
        .state('portfolios', {
          abstract: true,
          url: '/portfolios',
          templateUrl: '/portfolios/portfolios.html',

          resolve: {
            portfolios: ['portfolios',
              function(portfolios){
                return portfolios.all();
              }]
          },

          controller: ['$scope', '$state', 'portfolios', 'utils',
            function (  $scope,   $state,  portfolios,   utils) {
              $scope.portfolios = portfolios;

              $scope.goToRandom = function () {
                var randId = utils.newRandomKey($scope.portfolios, "id", $state.params.portfolioId);

                $state.go('portfolios.detail', { portfolioId: randId });
              };
            }]
        })

        .state('portfolios.list', {

          url: '',

          templateUrl: '/portfolios/portfolios.list.html'
        })

        .state('portfolios.detail', {

          url: '/{portfolioId:[0-9]{1,4}}',

          views: {

             '': {
              templateUrl: '/portfolios/portfolios.detail.html',
              controller: ['$scope', '$stateParams', 'utils',
                function (  $scope,   $stateParams,   utils) {
                  $scope.portfolio = utils.findById($scope.portfolios, $stateParams.portfolioId);
                }]
            },

            'hint@': {
              template: 'This is portfolios.detail populating the "hint" ui-view'
            },

            'menuTip': {
              templateProvider: ['$stateParams',
                function ($stateParams) {
                 return '<hr><small class="muted">portfolio ID: ' + $stateParams.portfolioId + '</small>';
                }]
            }
          }
        })

        .state('portfolios.detail.item', {

          url: '/item/:itemId',
          views: {

            '': {
              templateUrl: '/portfolios/portfolios.detail.item.html',
              controller: ['$scope', '$stateParams', '$state', 'utils',
                function (  $scope,   $stateParams,   $state,   utils) {
                  $scope.item = utils.findById($scope.portfolio.items, $stateParams.itemId);

                  $scope.edit = function () {
                    $state.go('.edit', $stateParams);
                  };
                }]
            },

            'hint@': {
              template: ' This is portfolios.detail.item overriding the "hint" ui-view'
            }
          }
        })

        .state('portfolios.detail.item.edit', {
          views: {

            '@portfolios.detail': {
              templateUrl: '/portfolios/portfolios.detail.item.edit.html',
              controller: ['$scope', '$stateParams', '$state', 'utils',
                function (  $scope,   $stateParams,   $state,   utils) {
                  $scope.item = utils.findById($scope.portfolio.items, $stateParams.itemId);
                  $scope.done = function () {
                    $state.go('^', $stateParams);
                  };
                }]
            }
          }
        });
    }
  ]
);
