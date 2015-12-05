app.config(
    ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
       $urlRouterProvider

        .when('/p?id', '/portfolios/:id')

        .otherwise('/');

        $stateProvider

        .state("home", {
           url: "/",
           templateUrl: "partials/home.html"
        })

        .state("messages", {
           url: "/messages",
           templateUrl: "partials/messages.html"
        })

        .state('about', {
          url: '/about',
          templateUrl: "partials/about.html"
        })
    }
  ]
);
