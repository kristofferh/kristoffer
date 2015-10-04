exports.prefixedEvent = function(element, type, callback) {
    var pfx = ['webkit', 'moz', 'MS', 'o', ''];
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) {
            type = type.toLowerCase();
        }
        element.addEventListener(pfx[p]+type, callback, false);
    }
};


function getEvents() {

    var events = { animation: null, transition: null};
    var t, a;
    var el = document.createElement('div');

    var animations = {
        'animation':'animationend',
        'MozAnimation':'animationend',
        'WebkitAnimation':'webkitAnimationEnd'
    };

    for(a in animations){
        if(el.style[a] !== undefined) {
            events.animation = animations[a];
            break;
        }
    }

    var transitions = {
        'transition':'transitionend',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
        if(el.style[t] !== undefined) {
            events.transition = transitions[t];
            break;
        }
    }

    return events;
}

var endEvents = getEvents();

exports.bindAnimationEnd = function(element, callback) {

    if(endEvents.animation) {
        element.addEventListener(endEvents.animation, function(e) { callback(e); }, false);
    } else {
        setTimeout( function( event ) { callback( event ); }, 0 );
    }
};

exports.bindTransitionEnd = function(element, callback) {

    if( endEvents.transition ) {
        element.addEventListener(endEvents.transition, function(e) { callback(e); }, false);
    } else {
        setTimeout( function( event ) { callback( event ); }, 0 );
    }
};
