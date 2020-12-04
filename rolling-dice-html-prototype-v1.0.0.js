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
function rollingDiceHTMLProto(){
    // Define dice 1 elements
    const rDice1 = Array.from(document.getElementById('rolling-dice-1').querySelectorAll('.side'));
    const rDice2 = Array.from(document.getElementById('rolling-dice-2').querySelectorAll('.side'));

    // Define roll button
    const rollButton = document.getElementById('roll-button');

    // OPTIONAL ------------------------------------------------
    // Define initial position of the dice/s
    function setSides(dice1, dice2){
        // set sides for rDice1
        dice1.forEach(function(element, index) {
            if(index !== 0){
                element.setAttribute('style', 'display: none;');
            }
        });

        // set sides for dice2
        dice2.forEach(function(element, index){
            if(index !== 0){
                element.setAttribute('style', 'display: none;');
            }
        });
    };
    // Run set initial positions of sides
    // setSides(rDice1, rDice2);
    // -----------------------------------------------------------

    // Define roll on click function
    function rollingDiceClick(){
        // Get the values
        let side1value = rollingDice().dice1();
        let side2value = rollingDice().dice2();
        // console.log(side1value);
        // console.log(side2value);

        // rDice1: get the side
            // iterate through each side
            // find the index from APP
            // get the nTH element from sides
            // apply style display: flex
            // rest of them: apply style display: none
        rDice1.forEach(function(element, index){
            element.setAttribute('style', 'display: none;');
            // console.log(index);
            if((index + 1) === side1value){
                element.setAttribute('style', 'display: flex;');
                // console.log(index);
            }
        })

        // rDice2: get the side
        rDice2.forEach(function(element, index){
            element.setAttribute('style', 'display: none;');
            // console.log(index);
            if((index + 1) === side2value){
                element.setAttribute('style', 'display: flex;');
                // console.log(index);
            }
        });

        // test log
        // console.log(rDice1);
        // console.log(rDice2);
    }
    rollingDiceClick();

    // Define function for roll button
    rollButton.addEventListener('click', function(){
        rollingDiceClick();
    })

}
rollingDiceHTMLProto();


