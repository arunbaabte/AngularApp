

/**
 * @ngdoc function
 * @name loginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('MainCtrl',['$scope','myService','$window','localStorageService', function ($scope,myService,$window,localStorageService) {
if (localStorageService.get('login')) {
  $window.location.href = '#/Home';
};
  $scope.login = [];
  var loginInStore = localStorageService.get('login');
  $scope.login = loginInStore || [];
$scope.login=function(){

var email=$scope.email;
var pass =$scope.password;
var promise=myService.loginservice(email,pass)
    promise.then(function(response) {
       if(response.data=="false"){

         alert("invalid login");

       }
       else{
        data=response.data;
        localStorageService.set('login',data);
        $window.location.href = '#/Home';
       }

    }, true)

}
  }]);