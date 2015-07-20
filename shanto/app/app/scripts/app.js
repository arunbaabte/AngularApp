'use strict';

/**
 * @ngdoc overview
 * @name loginApp
 * @description
 * # loginApp
 *
 * Main module of the application.
 */
angular
  .module('loginApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      })
      .when('/Signup', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/Home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
