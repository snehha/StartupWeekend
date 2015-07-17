$(document).ready(function() {
    $(".watch-video-btn").click(function(e) {
        e.preventDefault();
        $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'         : 640,
            'height'        : 385,
            'href'          : "http://www.youtube.com/v/tLe8ppXXgN8?fs=1&amp;autoplay=1",
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });

        return false;
    });



});