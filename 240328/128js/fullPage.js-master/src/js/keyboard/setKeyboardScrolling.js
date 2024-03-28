//@ts-check
import { getOptions } from '../common/options';
import { FP } from '../common/constants.js';
import { setIsScrollAllowed } from '../common/isScrollAllowed.js';

FP.setKeyboardScrolling = setKeyboardScrolling;

/**
* Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
*/
export function setKeyboardScrolling(value, directions){
    if(typeof directions !== 'undefined'){
        directions = directions.replace(/ /g,'').split(',');

        directions.forEach(function(direction){
            setIsScrollAllowed(value, direction, 'k');
        });
    }else{
        setIsScrollAllowed(value, 'all', 'k');
        getOptions().keyboardScrolling = value;
    }
}  