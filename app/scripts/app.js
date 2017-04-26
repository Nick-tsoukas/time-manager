(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('clock', {
                url: '/clock',
                templateUrl: '/templates/clock.html',
                controller: 'ClockCtrl as clock'
            })
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            });


    }

    angular
        .module('timeApp', ['ui.router', 'firebase', 'ngMaterial'])
        .config(config);
})();
