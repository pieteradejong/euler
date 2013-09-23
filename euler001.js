/*
Project Euler: Problem 1
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var isMultipleOf = function (a, b) {
	if (!isNumber(a) || !isNumber(b)) return null;
	return a % b === 0;
}

/*  http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric */
function isNumber(n) { // source: 
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumUpTo(upperLimit) {
	return _.reduce(_.range(1,upperLimit), function (sum, number) {
		if (isMultipleOf(number, 3) || isMultipleOf(number, 5)) return sum + number;
		else return sum;
	},0);}

console.log(sumUpTo(1000));