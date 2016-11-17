var $ = function(val){ return document.getElementById(val); };
var $$ = function(val){ return document.querySelectorAll(val); };

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

//-- tanggal --
function tanggal() {
    var d = new Date();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    switch (day) {
        case 0: day = 'Minggu';
                break;
        case 1: day = 'Senin';
                break;
        case 2: day = 'Selasa';
                break;
        case 3: day = 'Rabu';
                break;
        case 4: day = 'Kamis';
                break;
        case 5: day = 'Jumat';
                break;
        case 6: day = 'Sabtu';
                break;
    }

    switch (month) {
        case 0: month = 'Januari';
                break;
        case 1: month = 'Februari';
                break;
        case 2: month = 'Maret';
                break;
        case 3: month = 'April';
                break;
        case 4: month = 'Mei';
                break;
        case 5: month = 'Juni';
                break;
        case 6: month = 'Juli';
                break;
        case 7: month = 'Agustus';
                break;
        case 8: month = 'September';
                break;
        case 9: month = 'Oktober';
                break;
        case 10: month = 'November';
                break;
        case 11: month = 'Desember';
                break;
    }

    document.getElementById('date').innerHTML = day + ', ' + date + ' ' + month + ' ' + year;
}
