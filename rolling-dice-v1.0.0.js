/*
* Name: Rolling Dice
* Description: Rolling Dice for any games built in JavaScript
* Author: Shrikumar Infotech
* Author URI: dev@shrikumarinfotech.com
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

'use strict';

// instantiate rollingDice function
const rollingDice = function (){
    // define the dice sides array
    const diceSides = [1, 2, 3, 4, 5, 6];

    // define the rolling function
    return{
        dice1: function(){
            return diceSides[Math.floor(Math.random() * Math.floor(diceSides.length))];
        },
        dice2: function(){
            return diceSides[Math.floor(Math.random() * Math.floor(diceSides.length))];
        }
    };

};

module.exports = rollingDice();