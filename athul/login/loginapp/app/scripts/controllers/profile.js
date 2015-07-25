'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('profileCtrl',  function ($scope,localStorageService,$window)  {


var log = localStorageService.get('login');
if (log=="") {
  $window.location.href = '#/main';
};
         var l=log[0];
         $scope.email=l;
         $scope.logout=function(){
console.log("logout");
                  localStorageService.set('login',"");
                   $window.location.href = '#/main';
         }
  });