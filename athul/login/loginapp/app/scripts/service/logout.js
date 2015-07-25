angular.module('loginApp').service('logService', function ($http) {
this.logoutservice=function(id){
var result=$http({
        url: "http://127.0.0.1:8000/logout/",
        method: 'POST',
        data: { 'id': id},

  });
return result;
}
});