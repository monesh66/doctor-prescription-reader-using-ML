document.addEventListener('DOMContentLoaded', function() {

fetch('/lol')
    .then(response => response.json())
    .then(data => {
    
    document.getElementById('a').innerHTML = data['1'];
    document.getElementById('b').innerHTML = data['2'];
    document.getElementById('c').innerHTML = data['3'];
    document.getElementById('d').innerHTML = data['4'];
    document.getElementById('e').innerHTML = data['5'];
    document.getElementById('f').innerHTML = data['6'];
    document.getElementById('g').innerHTML = data['7'];
    document.getElementById('h').innerHTML = data['8'];
    document.getElementById('i').innerHTML = data['9'];
    document.getElementById('j').innerHTML = data['10'];
    document.getElementById('k').innerHTML = data['11'];
    document.getElementById('l').innerHTML = data['12'];
    document.getElementById('m').innerHTML = data['13'];
    document.getElementById('n').innerHTML = data['14'];
    document.getElementById('o').innerHTML = data['15'];
    document.getElementById('p').innerHTML = data['16'];
    document.getElementById('q').innerHTML = data['17'];
    document.getElementById('r').innerHTML = data['18'];
    document.getElementById('s').innerHTML = data['19'];
    document.getElementById('t').innerHTML = data['20'];

    
    //document.getElementById('d').innerText ="Current action: " + data[sece];

    });

}, false);
