'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('AboutCtrl',  function ($scope,$http)  {
$scope.sign=function(){
var email=$scope.email;
var pass=$scope.password;
  $http({

        url: "http://127.0.0.1:8000",
        method: 'POST',
        data: { 'email': email, 'password': pass}
  }).
  success(function(data) {
        // console.log("success");
        alert("success");
  }).
  error(function(data) {
    console.log("error");

  });

};
  });
