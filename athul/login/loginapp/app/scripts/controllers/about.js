'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('AboutCtrl',['$scope','signService','$window','Upload','localStorageService','logService', function ($scope,signService,$window,Upload,localStorageService,logService) {
 var id = localStorageService.get('login');
if (id=="") {
  $window.location.href = '#/main';

};
$scope.sign=function(){
var email=$scope.email;
var name=$scope.name;
var pic=$scope.pic;
var address=$scope.address;
var gender=$scope.gender;
var pass =$scope.password;
console.log(email);
console.log(pass);
console.log(name);
console.log(pic);
console.log(address);
console.log(gender);
var promise=signService.signservice(email,pass,name,pic,gender,address)
    promise.then(function(response) {
      console.log(response.data)
       if(response.data=="false"){
$scope.error=true;
$scope.val="Username or password is incorrect";


       }
       else{
        $scope.error=true;
$scope.val="successfully inserted";
       }

    });
  }
           $scope.logout=function(){
        console.log("logout");
    
    var promise=logService.logoutservice(id)
    promise.then(function(response) {
       if(response.data=="false"){
         console.log("hi");


       }
       else{
        localStorageService.set('login',"");
           name=response.data;
           $scope.email=name;
           console.log(name);
           $window.location.href = '#/main';
       }

    }, true);
  }
}]);
