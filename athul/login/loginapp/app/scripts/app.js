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
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'ngFileUpload',
    'lr.upload'


  ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      })
      .when('/Signup', {
        templateUrl: 'views/admin/about.html',
        controller: 'AboutCtrl',
      })
      .when('/Home', {
        templateUrl: 'views/admin/home.html',
        controller: 'HomeCtrl',
      })
      .when('/userhome', {
        templateUrl: 'views/user/home.html',
        controller: 'HomeCtrl',
      })
      .when('/profile', {
        templateUrl: 'views/admin/profile.html',
        controller: 'profileCtrl',
      })
      .when('/userprofile', {
        templateUrl: 'views/user/profile.html',
        controller: 'profileCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
