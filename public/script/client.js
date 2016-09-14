var $ = function(val){ return document.getElementById(val); };
var $$ = function(val){ return document.querySelectorAll(val); };

//-- slideshow --
var x = 1;
var ximg = $$('.slider').length;

function active(n) {
    for (var i = 1; i <= ximg; i++) {
        $('img-' + i).style.order = '1';
        $('img-' + n).style.order = '0';
    }
}

function change(){
    x += 1;

    if (x > ximg){
        x = 1;
    }

    return active(x);
}
setInterval(change, 3000);

//-- jam --
var times = function(){
    var d = new Date();

    var h = checkTime(d.getHours());
    var m = checkTime(d.getMinutes());
    var s = checkTime(d.getSeconds());

    document.getElementById('footer-time').innerHTML = h + ':' + m + ':' + s;

    var t = setTimeout(times, 1000);
}

var checkTime = function(val){
    if (val < 10) { val = "0" + val; }
    return val;
}

//-- modal --


/*
$('exit').onclick = function(){
    $('modal').style.display = 'none';
    $('modal-container').style.display = 'none';
    $('modal-container').style.backgroundColor = 'rgba(0,0,0,0)';
};
/*
for (var i = 0; i <= $$('.menu-akademik').length; i++) {
    $$('.menu-akademik')[i].onclick = function(){
        $('modal-container').style.display = 'flex';
        $('modal').style.display = 'flex';
        $('modal-container').style.backgroundColor = 'rgba(0,0,0,0.7)';
    }
}
*/
