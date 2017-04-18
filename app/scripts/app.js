(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
            .state('clock', {
            url: '/',
            templateUrl: '/templates/clock.html',
            controller: 'ClockCtrl as clock'
        });
       
    }
    
     
   

    angular
        .module('timeApp', ['ui.router', 'firebase','ngMaterial'])
        .config(config);
})();


