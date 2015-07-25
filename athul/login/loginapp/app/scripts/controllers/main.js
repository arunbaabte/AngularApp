

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
$scope.hi=false;
  $scope.login = [];
  var loginInStore = localStorageService.get('login');
  $scope.login = loginInStore || [];
$scope.login=function(){

var email=$scope.email;
var pass =$scope.password;
var promise=myService.loginservice(email,pass)
    promise.then(function(response) {
       if(response.data=="false"){
$scope.error=true;
$scope.val="Username or password is incorrect";


       }
       else{
        $scope.hi=true;
        data=response.data['id'];
        role=response.data['role'];
        localStorageService.set('login',data);
        if(role==1){
        $window.location.href = '#/Home';
        }
        else{
         $window.location.href = '#/userhome';
        }
       }

    }, true)

}

  }]);
 