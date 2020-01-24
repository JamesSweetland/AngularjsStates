angular.module('myApp', ['ui.router']);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // set default state
    $urlRouterProvider.otherwise("/onboarding");
    // set up states
    $stateProvider
        .state('onboarding', {
            url: '/onboarding',
            templateUrl : 'scripts/states/onboarding.html'
    })
        .state('queue', {
            url: '/queue',
            templateUrl : 'scripts/states/queue.html'
    })
}]);
