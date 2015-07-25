angular.module('loginApp').service('signService', function ($http) {
this.signservice=function(email,pass,name,pic,gender,address){



var result=$http({
        url: "http://127.0.0.1:8000/signup/",
        method: 'POST',
        data: { 'email': email, 'password': pass,"name":name,"pic":pic,"gender":gender,"address":address },

  });
return result;
}
});