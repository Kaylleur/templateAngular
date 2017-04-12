/**
 * Created by thomas on 12/04/17.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute',
    'DefaultFactory'
]).
config(['$routeProvider','$logProvider', function($routeProvider,$logProvider) {

    $routeProvider
        .when("/view1",{
            templateUrl: 'app/views/homeView.html',
            controller: 'HomeController'
        })
        .when("/view2/:id", {
            templateUrl : "app/views/secondView.html",
            controller : "SecondController"
        })
        .otherwise({redirectTo: '/view1'});

    $logProvider.debugEnabled(true);
}]);