function createSquare() {
    var square = document.createElement('div');
    square.className = 'square';
    var body = document.body;
    body.append(square);
    setTheInterval(square, false);

}


function setTheInterval(element, grow) {
    setInterval(function () {
        var body = document.body;
        var mainPage = $('#mainpage');
        var top = body.scrollTop;
        var height = body.clientHeight;
        var navBar = document.getElementsByTagName('nav')[0];
        var navBarHeight = navBar.clientHeight;
        var borderWidth = $(element).css('border-width').toString();
        borderWidth = Number(borderWidth.substring(0, borderWidth.length-2))*2;
        var squareHeight = ($(element).height()+borderWidth) * 1.3;
        var left = $(mainPage).position().left;
        var x = Math.floor(Math.random() * (left - squareHeight));
        if (Math.random() < .5) {
            x += $(mainPage).width() + left + 20;
        }
        var y = Math.floor(Math.random() * (height - navBarHeight - squareHeight) + top + navBarHeight);

        if (grow) {
            var newSize = $(element).width() * 1.14;
            newSize = (newSize > 190) ? 190 : newSize;
            $(element).animate({
                height: newSize,
                width: newSize,
                left: x,
                top: y
            }, 1200);
        } else {
            $(element).animate({
                left: x,
                top: y,
                backgroundColor: 'rgb('+ Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) +',' + Math.floor(Math.random()*256) + ')'/*,
                 borderColor: 'rgb('+ Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) +',' + Math.floor(Math.random()*256) + ')'*/
            }, 2000);
        }
    }, 4000);
}

function resizeFunctions() {

    var navBar = document.getElementsByTagName('nav')[0];
    var ul = document.getElementsByTagName('ul')[0];
    var select = document.getElementsByTagName('select')[0];
    var navBarWidth = navBar.clientWidth;
    if (navBarWidth < 700) {
        $(ul).hide();
        $(select).show();
    } else {
        $(select).hide();
        $(ul).show();
    }
    var title = document.getElementById('title');
    var top = 26-(title.clientHeight)*1.27;
    title.style.setProperty('top', top + 'px');
    var section = document.getElementsByTagName('select')[0];
    top = (50-section.clientHeight)/2;
    section.style.setProperty('top', top + 'px');

}



$(document).ready(function() {
    var squareNumber = 30;
    var spawnRate = 257;
    var interval = setInterval(function() {
        if (document.getElementsByClassName('square').length < squareNumber) {
            createSquare();
        } else {
            clearInterval(interval);
        }
    }, spawnRate);
    setTimeout(function(){
        var image = $("#just");
        setTheInterval(image, true);
    }, 8000);

    document.body.onresize = function() {
        resizeFunctions();
    };
    resizeFunctions();

    /*document.onscroll = function() {
     checkNavBar();
     };*/

});