'use strict';
var obj = new Array();
app.factory('loginService',function($http,$location,$q,sessionService,base_url){
    return{
        login:function (user,scope) {
           var $promise=$http.post(base_url+'auth',user); //send data
            $promise
                .success(function(data,status){
                    if(data.status==200){
                        sessionService.set('operator',data.result[0].id_operator);
                        sessionService.set('nama',data.result[0].nama);
                        sessionService.set('loket',data.result[0].no_loket);
                        sessionService.set('nama_loket',data.result[0].nama_loket);
                        //$location.path('/');
                        document.location.href="../operator";
                        //obj.push(1);
                        //console.log(obj.pop());
                    }else{
                        scope.msgText="USERNAME ATAU PASSWORD SALAH";
                        $location.path('/login');
                    }
                })
                .error(function (data,status) {
                    document.write(data);
                });
        },
        logout:function () {
            sessionService.destroy('operator');
            sessionService.destroy('nama');
            sessionService.destroy('loket');
            sessionService.destroy('nama_loket');
            $location.path('/login');
        },
        isLogged:function () {
            if(sessionService.get('operator')) return true;
        }
    }
});
