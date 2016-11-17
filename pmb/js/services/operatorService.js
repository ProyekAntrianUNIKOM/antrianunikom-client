'use strict';
var obj = new Array();
app.factory('operatorService',function($http,base_url){
    var obj={};
    obj.terakhir = function(id){
        return $http.get(base_url+"temp/"+id);
    };
    obj.simpan = function (id_antrian,operator,id) {

        $http.get(base_url+"getantrian/"+id).success(function(data,status){
            var data = {
                id_antrian : data.result[0].id_antrian,
                operator   : operator,
                loket      : id
            }
            $http.post(base_url+"antrian/selesai",data).error(function (data) {
                document.write(data);
            });
        }).error(function(data,status){
            document.write(data);
        })

        return $http.get(base_url+"getantrian/"+id);
    };
    return obj;
});
