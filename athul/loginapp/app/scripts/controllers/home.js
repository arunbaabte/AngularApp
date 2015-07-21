'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('HomeCtrl',  function ($scope,localStorageService,$window)  {

var log = localStorageService.get('login');

         console.log(log);
         $scope.email=log;
         $scope.logout=function(){
console.log("logout");
         	        localStorageService.set('login',"");
         	         $window.location.href = '#/main';
         }

  });