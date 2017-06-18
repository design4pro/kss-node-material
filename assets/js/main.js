// headroom
var headroom  = new Headroom(document.querySelector('.sg-navbar'), {
    offset: 205,
    tolerance: 5,
    classes: {
        initial: 'sg-navbar-animated',
        pinned: 'sg-navbar-pinned',
        unpinned: 'sg-navbar-unpinned'
    }
});
headroom.init();
// prettyPrint
prettyPrint();

// expand code blocks
var markups = document.getElementsByClassName('sg-markup');
for (var i = 0; i < markups.length; i++) {
    markups[i].addEventListener('click', function(e) {
        this.classList.toggle('sg-markup-expanded');
    }, false);
}

$(document).ready(function () {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
});
