angular.module('loginApp').service('homeService', function ($http) {
this.homeservice=function(email){



var result=$http({
        url: "http://127.0.0.1:8000/home/",
        method: 'POST',
        data: { 'email': email},

  });
return result;
}
});