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

// Define HTML prototype functions
function rollingDiceClick(){
    // Define dice 1 elements
    const rDice1 = Array.from(document.getElementById('rolling-dice-1').querySelectorAll('.side'));
    const rDice2 = Array.from(document.getElementById('rolling-dice-2').querySelectorAll('.side'));

    // rDice1: get the side
        // TOBEDONE
        // iterate through each side
        // find the index from APP
        // get the nTH element from sides
        // apply style display: flex
        // rest of them: apply style display: none

    // rDice2: get the side
        // TOBEDONE


    // test log
    console.log(rDice1);
    console.log(rDice2);
}
rollingDiceClick(); // TOBEDONE: add a button and function work on click