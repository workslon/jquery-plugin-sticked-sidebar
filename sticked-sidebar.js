$.fn.follow = function(from, to) {
    var $window     = $(window),
        $follower   = this,
        height      = $follower.height(),
        to          = to - height,
        left        = $follower.offset().left,
        path        = to - from,

        follow  = function() {
            var windowScrollTop = $window.scrollTop(),
                className       = (function () {
                    return $follower.hasClass('sticked') ? 'sticked' : 'follows'
                })();

            if (windowScrollTop >= from && windowScrollTop <= to) {
                $follower.removeClass('sticked').addClass('follows').css({
                    top: 0
                })
            } else if (windowScrollTop <= from) {
                $follower.removeClass('follows').addClass('sticked').css({
                    top: from
                })
            } else if (windowScrollTop >= to) {
                $follower.removeClass('follows').addClass('sticked').css({
                    top: to
                })
            }
        };

    $($follower).addClass('sticked');
    $window.scroll(follow);
    
    return this;
};
