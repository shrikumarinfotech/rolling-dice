/*
* Name: Rolling Dice
* Description: Rolling Dice for any games built in JavaScript
* Author: Shrikumar Infotech
* Author URI: dev@shrikumarinfotech.com
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

'use strict';

// define and import rollingDice plugin
const rollingDice = require('./rolling-dice-v1.0.0');
// define dices
const dice1 = rollingDice.dice1();
const dice2 = rollingDice.dice2();
// log the values
console.log(dice1);
console.log(dice2);