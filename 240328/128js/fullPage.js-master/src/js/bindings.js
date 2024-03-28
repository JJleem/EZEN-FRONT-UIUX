import * as utils from './common/utils.js';
import { EventEmitter } from './common/eventEmitter.js';
import { setState } from './common/state.js';
import { events } from './common/events.js';

EventEmitter.on(events.bindEvents, bindEvents);

function bindEvents(){

    //Scrolls to the section when clicking the navigation bullet
    //simulating the jQuery .on('click') event using delegation
    ['click', 'touchstart'].forEach(function(eventName){
        utils.docAddEvent(eventName, delegatedEvents);
    });

    utils.windowAddEvent('focus', focusHandler);

    internalEvents();
}

function internalEvents(){
    EventEmitter.on(events.onDestroy, onDestroy); 
}

function delegatedEvents(e){
    EventEmitter.emit(events.onClickOrTouch, {e: e, target: e.target});
}

function onDestroy(){
    ['click', 'touchstart'].forEach(function(eventName){
        utils.docRemoveEvent(eventName, delegatedEvents);
    });
}


// changing isWindowFocused to true on focus event
function focusHandler(){
    setState({isWindowFocused: true});
}
