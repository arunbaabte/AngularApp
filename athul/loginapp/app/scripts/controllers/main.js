

/**
 * @ngdoc function
 * @name loginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
  .controller('MainCtrl',['$scope','myService','$window', function ($scope,myService,$window) {
$scope.login=function(){
var email=$scope.email;
var pass =$scope.password;
var promise=myService.loginservice(email,pass)
    promise.then(function(response) {
      console.log(response.data)
       if(response.data=="false"){

         alert("invalid login");

       }
       else{
        $window.location.href = '#/Home';
       }

    })

}
  }]);
 