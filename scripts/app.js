angular.module('myApp', ['ui.router']);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // set default state
    $urlRouterProvider.otherwise("/state1");
    // set up states
    $stateProvider
        .state('state1', {
            url: '/state1',
            templateUrl : 'scripts/states/onboarding.html'
    })
        .state('state2', {
            url: '/state2',
            templateUrl : 'scripts/states/state2.html'
    })
}]);
