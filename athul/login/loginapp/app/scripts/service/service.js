angular.module('loginApp').service('myService', function ($http) {
this.loginservice=function(email,pass){



var result=$http({
        url: "http://127.0.0.1:8000/login/",
        method: 'POST',
        data: { 'email': email, 'password': pass }
  });
return result;
}
});