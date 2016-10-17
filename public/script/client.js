var $ = function(val){ return document.getElementById(val); };
var $$ = function(val){ return document.querySelectorAll(val); };

//-- jam -- 
var times = function(){
    var d = new Date();
    var h = checkTime(d.getHours());
    var m = checkTime(d.getMinutes());
    var s = checkTime(d.getSeconds())
    document.getElementById('footer-time').innerHTML = h + ':' + m + ':' + s;
    var t = setTimeout(times, 1000);
}

var checkTime = function(val){
    if (val < 10) { val = "0" + val; }
    return val;
}