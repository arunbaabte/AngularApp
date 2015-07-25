'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('HomeCtrl',['$scope','homeService','$window','localStorageService','logService', function ($scope,homeService,$window,localStorageService,logService) {




 var id = localStorageService.get('login');
if (id=="") {
  $window.location.href = '#/main';

}
else{
         var email=id;
         console.log(email);
var promise=homeService.homeservice(email)
    promise.then(function(response) {
       if(response.data=="false"){
         $scope.val="";


       }
       else{
           name=response.data[0]
           $scope.email=name;
       }

    }, true);
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