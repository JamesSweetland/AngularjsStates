// Code goes here

    // load with
    // http://local9.experiments.lifeafterflex.com/com/dotComIt/samples/uiRouter/01Index_TwoViews.html#/state1

    angular.module('routerTestApp', ['ui.router']);

    angular.module('routerTestApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
        // set default state
        $urlRouterProvider.otherwise("/state1");
        // set up all states
        $stateProvider
                .state('state1', {
                    url: '/state1',
                    templateUrl : 'scripts/states/state1.html'
                })
                .state('state2', {
                    url: '/state2',
                    templateUrl : 'scripts/states/state2.html'
                })
    }]);
